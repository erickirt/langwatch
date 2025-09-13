import {
  TRACE_INDEX,
  TRACE_COLD_INDEX,
  esClient,
  COLD_STORAGE_AGE_DAYS,
} from "../../server/elasticsearch";
import { type Client as ElasticClient } from "@elastic/elasticsearch";

const buildColdStorageMigrationQuery = () => {
  const cutoffDate =
    new Date().getTime() - COLD_STORAGE_AGE_DAYS * 24 * 60 * 60 * 1000;

  return {
    bool: {
      must: [
        {
          range: {
            "timestamps.inserted_at": {
              lt: cutoffDate,
            },
          },
        },
      ],
    },
  };
};

const pollReindexTask = async (
  client: ElasticClient,
  taskId: string,
  expectedTotal: number
): Promise<number> => {
  const pollInterval = 5000; // 5 seconds

  while (true) {
    try {
      const taskResponse = await client.tasks.get({
        task_id: taskId,
      });

      const task = taskResponse.task;
      const completed = taskResponse.completed;

      if (completed) {
        const response = taskResponse.response;
        if (response.failures && response.failures.length > 0) {
          console.error(
            "❌ Reindex task completed with failures:",
            response.failures
          );
          throw new Error(
            `Reindex task failed with ${response.failures.length} failures`
          );
        }

        const migrated = (response.created ?? 0) + (response.updated ?? 0);
        console.log(`✅ Reindex task completed successfully`);
        return migrated;
      }

      // For sliced tasks, we need to get progress from all child tasks
      // since the parent task shows 0 progress
      let totalCreated = 0;
      let totalUpdated = 0;
      let totalProcessed = 0;
      let hasChildTasks = false;

      // Check if this is a sliced task by looking for child tasks
      try {
        const allTasksResponse = await client.tasks.list({
          actions: "*reindex",
          detailed: true,
          parent_task_id: taskId,
        });

        if (
          allTasksResponse.nodes &&
          Object.keys(allTasksResponse.nodes).length > 0
        ) {
          hasChildTasks = true;

          // Aggregate progress from all child tasks
          for (const nodeId in allTasksResponse.nodes) {
            const nodeTasks = allTasksResponse.nodes[nodeId]!.tasks;
            for (const childTaskId in nodeTasks) {
              const childTask = nodeTasks[childTaskId]!;
              if (childTask.status) {
                totalCreated += childTask.status.created || 0;
                totalUpdated += childTask.status.updated || 0;
                totalProcessed +=
                  (childTask.status.created || 0) +
                  (childTask.status.updated || 0);
              }
            }
          }
        }
      } catch (childTaskError) {
        console.warn(
          "⚠️ Could not fetch child task progress:",
          (childTaskError as any).message
        );
      }

      // Show progress
      if (hasChildTasks && totalProcessed > 0) {
        const progress =
          expectedTotal > 0
            ? Math.round((totalProcessed / expectedTotal) * 100)
            : 0;
        console.log(
          `⏳ Reindex progress: ${totalProcessed}/${expectedTotal} (${progress}%) [Created: ${totalCreated}, Updated: ${totalUpdated}]`
        );
        if (progress === 100) {
          console.log(`✅ Reindex task completed successfully`);
          return totalProcessed;
        }
      } else if (task.status) {
        // Fallback to parent task status if no child tasks found
        const { created = 0, updated = 0, total = expectedTotal } = task.status;
        const processed = created + updated;
        const progress = total > 0 ? Math.round((processed / total) * 100) : 0;
        console.log(
          `⏳ Reindex progress: ${processed}/${total} (${progress}%) [Created: ${created}, Updated: ${updated}]`
        );
      }

      // Check if task failed
      if (
        !!task.cancelled ||
        (task.status?.failures && task.status.failures.length > 0)
      ) {
        const failures = task.status?.failures || [];
        console.error("❌ Reindex task failed:", failures);
        throw new Error(
          `Reindex task failed or was cancelled. Failures: ${failures.length}`
        );
      }

      // Wait before next poll
      await new Promise((resolve) => setTimeout(resolve, pollInterval));
    } catch (error: any) {
      if (error.message?.includes("Reindex task failed")) {
        throw error; // Re-throw our custom errors
      }
      console.error("❌ Error polling reindex task:", error);
      throw new Error(`Failed to poll reindex task: ${error.message}`);
    }
  }
};

const migrateTracesToColdStorage = async (organizationId?: string) => {
  const client = await esClient(
    organizationId ? { organizationId } : undefined
  );

  console.log(
    `🔍 Searching for traces older than ${COLD_STORAGE_AGE_DAYS} days...`
  );

  const query = buildColdStorageMigrationQuery();

  // First, count how many documents we'll be migrating
  const countResponse = await client.count({
    index: TRACE_INDEX.alias,
    body: { query },
  });

  const totalToMigrate = countResponse.count;
  console.log(`📊 Found ${totalToMigrate} traces to migrate to cold storage`);

  if (totalToMigrate === 0) {
    console.log("✅ No traces to migrate");
    return { migrated: 0, errors: 0 };
  }

  // Step 1: Reindex old traces to cold storage
  console.log(
    `📤 Starting reindex of ${totalToMigrate} traces to cold storage...`
  );
  const reindexResponse = await client.reindex({
    wait_for_completion: false,
    slices: "auto",
    requests_per_second: 200,
    body: {
      conflicts: "proceed",
      source: {
        index: TRACE_INDEX.alias,
        query: query,
        size: 200,
      },
      dest: {
        index: TRACE_COLD_INDEX.base,
      },
    },
  });

  const taskId = reindexResponse.task;
  console.log(`📋 Reindex task started with ID: ${taskId}`);

  if (!taskId) {
    throw new Error(
      `Reindex task failed to be created: ${JSON.stringify(reindexResponse)}`
    );
  }

  // Poll task status until completion
  const reindexed = await pollReindexTask(client, `${taskId}`, totalToMigrate);
  console.log(`✅ Successfully reindexed ${reindexed} traces to cold storage`);

  if (reindexed !== totalToMigrate) {
    console.warn(
      `⚠️  Expected to reindex ${totalToMigrate} traces, but reindexed ${reindexed}`
    );
  }

  // Step 2: Delete old traces from hot storage (only if reindexing was successful)
  if (reindexed > 0) {
    console.log(`🗑️  Deleting ${reindexed} old traces from hot storage...`);
    const deleteResponse = await client.deleteByQuery({
      index: TRACE_INDEX.alias,
      refresh: true,
      body: { query },
    });

    const deletedCount = deleteResponse.deleted ?? 0;
    console.log(
      `✅ Successfully deleted ${deletedCount} traces from hot storage`
    );

    if (deletedCount !== reindexed) {
      console.warn(
        `⚠️  Expected to delete ${reindexed} traces, but deleted ${deletedCount}`
      );
    }

    return { migrated: deletedCount, errors: 0 };
  } else {
    return { migrated: 0, errors: totalToMigrate };
  }
};

const verifyMigration = async (organizationId?: string) => {
  console.log("🔍 Verifying migration...");

  const client = await esClient(
    organizationId ? { organizationId } : undefined
  );
  const query = buildColdStorageMigrationQuery();

  // Check remaining old traces in hot storage
  const hotCount = await client.count({
    index: TRACE_INDEX.alias,
    body: { query },
  });

  // Check traces in cold storage
  const coldCount = await client.count({
    index: TRACE_COLD_INDEX.alias,
    body: {
      query: {
        match_all: {},
      },
    },
  });

  console.log(`📊 Verification results:`);
  console.log(`  - Remaining old traces in hot storage: ${hotCount.count}`);
  console.log(`  - Total traces in cold storage: ${coldCount.count}`);

  if (hotCount.count > 0) {
    console.warn(
      `⚠️  ${hotCount.count} old traces still remain in hot storage`
    );
  } else {
    console.log(`✅ All old traces successfully migrated to cold storage`);
  }
};

export const migrateToColdStorage = async (organizationId?: string) => {
  console.log("🚀 Starting migration to cold storage...");
  console.log(`📅 Migrating traces older than ${COLD_STORAGE_AGE_DAYS} days`);

  const client = await esClient(
    organizationId ? { organizationId } : undefined
  );

  // Check if cold storage index exists
  const coldIndexExists = await client.indices.exists({
    index: TRACE_COLD_INDEX.base,
  });

  if (!coldIndexExists) {
    console.log(
      "⚠️  Cold storage index does not exist, skipping moving traces to cold storage"
    );
    console.log(
      `💡 Run 'setupColdStorage' task first to create the ${TRACE_COLD_INDEX.base} index`
    );
    return;
  }

  try {
    const result = await migrateTracesToColdStorage(organizationId);

    console.log("");
    console.log("📋 Migration Summary:");
    console.log(`  - Traces migrated: ${result.migrated}`);
    console.log(`  - Errors encountered: ${result.errors}`);

    if (result.errors > 0) {
      console.warn(`⚠️  Migration completed with ${result.errors} errors`);
    } else {
      console.log("✅ Migration completed successfully!");
    }

    await verifyMigration(organizationId);

    return result;
  } catch (error) {
    console.error("❌ Cold storage migration failed:", error);
    throw error;
  }
};

export default async function execute(organizationId?: string) {
  await migrateToColdStorage(organizationId);
}
