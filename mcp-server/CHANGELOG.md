# Changelog

## [0.2.0](https://github.com/erickirt/langwatch/compare/mcp-server@v0.1.0...mcp-server@v0.2.0) (2025-10-15)


### Features

* added auto setup functionality for langwatch mcp ([#617](https://github.com/erickirt/langwatch/issues/617)) ([8c95b07](https://github.com/erickirt/langwatch/commit/8c95b07598a74285940b0c9267368543a9ced5e0))
* ci/cd steps for all packages and deployables, including improvements to caching and bundle sizes ([#351](https://github.com/erickirt/langwatch/issues/351)) ([e67a169](https://github.com/erickirt/langwatch/commit/e67a1694fec2f96479266454403928e9dc68a20f))


### Bug Fixes

* add missing dotenv dependency for running tests ([fb706ce](https://github.com/erickirt/langwatch/commit/fb706ceef9a298d070b264ad8b6da7c2df5e2a5d))
* downgrade litellm dependency due to https://github.com/BerriAI/litellm/issues/14145 preventing to build it on lambda ([066d97c](https://github.com/erickirt/langwatch/commit/066d97c26252c82f9143e36427782c7af19912a2))
* judge agent for mcp-server test ([cd8e378](https://github.com/erickirt/langwatch/commit/cd8e3783ec02f02174ecb5fd86fa86c3f11e1734))
* mcp-server ci ([0ab6e51](https://github.com/erickirt/langwatch/commit/0ab6e513129d9b1fbdb7a696ce1d99ed6093dea3))
* run claude-code on the CI ([d760307](https://github.com/erickirt/langwatch/commit/d760307807c72a2a0e995a4f0a42845c2cc5114a))


### Miscellaneous

* release main ([#652](https://github.com/erickirt/langwatch/issues/652)) ([dbacf6b](https://github.com/erickirt/langwatch/commit/dbacf6b374dd01a6f3963d52d4cb10ced5609b80))


### Documentation

* add detailed markdown documentation for LangWatch eval notebook ([#618](https://github.com/erickirt/langwatch/issues/618)) ([525b62a](https://github.com/erickirt/langwatch/commit/525b62ad6ea01f122297b1a3fd1eb7e842479f19))
* added mcp-server contributing guide ([19d1431](https://github.com/erickirt/langwatch/commit/19d14313824663842e5bba3a98986b9b80382300))
* improve notebook descriptions ([fa1f267](https://github.com/erickirt/langwatch/commit/fa1f26705bfff3143dbd6d16edfdae86bd5ce6bd))


### Code Refactoring

* split tool call fix helper ([c95028f](https://github.com/erickirt/langwatch/commit/c95028fba882357b33ca975e9d08ceabfe5cfc1c))

## [0.1.0](https://github.com/langwatch/langwatch/compare/mcp-server@v0.0.5...mcp-server@v0.1.0) (2025-09-19)


### Features

* added auto setup functionality for langwatch mcp ([#617](https://github.com/langwatch/langwatch/issues/617)) ([8c95b07](https://github.com/langwatch/langwatch/commit/8c95b07598a74285940b0c9267368543a9ced5e0))
* ci/cd steps for all packages and deployables, including improvements to caching and bundle sizes ([#351](https://github.com/langwatch/langwatch/issues/351)) ([e67a169](https://github.com/langwatch/langwatch/commit/e67a1694fec2f96479266454403928e9dc68a20f))


### Bug Fixes

* add missing dotenv dependency for running tests ([fb706ce](https://github.com/langwatch/langwatch/commit/fb706ceef9a298d070b264ad8b6da7c2df5e2a5d))
* judge agent for mcp-server test ([cd8e378](https://github.com/langwatch/langwatch/commit/cd8e3783ec02f02174ecb5fd86fa86c3f11e1734))
* mcp-server ci ([0ab6e51](https://github.com/langwatch/langwatch/commit/0ab6e513129d9b1fbdb7a696ce1d99ed6093dea3))
* run claude-code on the CI ([d760307](https://github.com/langwatch/langwatch/commit/d760307807c72a2a0e995a4f0a42845c2cc5114a))


### Documentation

* add detailed markdown documentation for LangWatch eval notebook ([#618](https://github.com/langwatch/langwatch/issues/618)) ([525b62a](https://github.com/langwatch/langwatch/commit/525b62ad6ea01f122297b1a3fd1eb7e842479f19))
* added mcp-server contributing guide ([19d1431](https://github.com/langwatch/langwatch/commit/19d14313824663842e5bba3a98986b9b80382300))
* improve notebook descriptions ([fa1f267](https://github.com/langwatch/langwatch/commit/fa1f26705bfff3143dbd6d16edfdae86bd5ce6bd))


### Code Refactoring

* split tool call fix helper ([c95028f](https://github.com/langwatch/langwatch/commit/c95028fba882357b33ca975e9d08ceabfe5cfc1c))
