import EmojiPicker, {
  EmojiStyle,
  SkinTonePickerLocation,
} from "emoji-picker-react";
import { ConfigModal } from "./ConfigModal";
import { PopoverContent } from "@chakra-ui/react";

export function EmojiPickerModal({
  open,
  onClose,
  onChange,
}: {
  open: boolean;
  onClose: () => void;
  onChange: (emoji: string) => void;
}) {
  return (
    <ConfigModal open={open} onClose={onClose} title="Workflow Icon" unstyled>
      <PopoverContent marginRight={4}>
        <EmojiPicker
          emojiStyle={EmojiStyle.NATIVE}
          skinTonePickerLocation={SkinTonePickerLocation.PREVIEW}
          onEmojiClick={(emojiData) => {
            onChange(emojiData.emoji);
            onClose();
          }}
        />
      </PopoverContent>
    </ConfigModal>
  );
}
