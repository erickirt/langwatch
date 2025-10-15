# Changelog

## [0.8.0](https://github.com/erickirt/langwatch/compare/typescript-sdk@v0.7.3...typescript-sdk@v0.8.0) (2025-10-15)


### Features

* bump it all from gpt-4o-mini to gpt-5 ([e2fb8bb](https://github.com/erickirt/langwatch/commit/e2fb8bb95048807b4a9d5713d41e6559e72da012))
* ci/cd steps for all packages and deployables, including improvements to caching and bundle sizes ([#351](https://github.com/erickirt/langwatch/issues/351)) ([e67a169](https://github.com/erickirt/langwatch/commit/e67a1694fec2f96479266454403928e9dc68a20f))
* expand prompts support in python sdk ([#540](https://github.com/erickirt/langwatch/issues/540)) ([f7cd8b2](https://github.com/erickirt/langwatch/commit/f7cd8b233258df270a0f383052a4349b587e8b8d))
* guaranteed availability ([#630](https://github.com/erickirt/langwatch/issues/630)) ([d4d3f55](https://github.com/erickirt/langwatch/commit/d4d3f553daaeaba1d3576141f40fc182ef2b21bf))
* improve helm chart ([#608](https://github.com/erickirt/langwatch/issues/608)) ([699b8f0](https://github.com/erickirt/langwatch/commit/699b8f0a9ce3b05058141f00281a5b68f9874978))
* new open-telemetry based typescript sdk ([#500](https://github.com/erickirt/langwatch/issues/500)) ([7636d4c](https://github.com/erickirt/langwatch/commit/7636d4c0d2601a52ed597fb16ab4e7ff3c4f5fce))
* prompt cli ([#524](https://github.com/erickirt/langwatch/issues/524)) ([aeaddc5](https://github.com/erickirt/langwatch/commit/aeaddc5de91db96643ef1e31077b255b3a696234))
* redesign typescript sdk ([#529](https://github.com/erickirt/langwatch/issues/529)) ([dc9637d](https://github.com/erickirt/langwatch/commit/dc9637dbb51ecd24b2714711c8c413df77cc0b0f))
* ship new typescript sdk ([#523](https://github.com/erickirt/langwatch/issues/523)) ([ff17340](https://github.com/erickirt/langwatch/commit/ff173402e602b6b176fd75a6c5d3391f2a1c947c))
* updates to prompt sdk ([#530](https://github.com/erickirt/langwatch/issues/530)) ([492d269](https://github.com/erickirt/langwatch/commit/492d269192ce6c528f46856b57a3498d2b35c8b1))


### Bug Fixes

* broken package.json on typescript sdk ([#522](https://github.com/erickirt/langwatch/issues/522)) ([85eed4c](https://github.com/erickirt/langwatch/commit/85eed4c747d5e96999556f2b23b9f6cf6750ce96))
* copy-types needed shebang, and fix git checks on publish with pnpm ([#521](https://github.com/erickirt/langwatch/issues/521)) ([f371442](https://github.com/erickirt/langwatch/commit/f371442115bf93e71456ec87d3cedc403e098673))
* failing sdk tests ([#619](https://github.com/erickirt/langwatch/issues/619)) ([d96be17](https://github.com/erickirt/langwatch/commit/d96be171103d7ccf741b430dcb9823c60a45e929))
* find local prompt ([#700](https://github.com/erickirt/langwatch/issues/700)) ([ab42400](https://github.com/erickirt/langwatch/commit/ab42400dea353dd72f5be66004f0cb9a11f2e7d2))
* make peer dependencies more loose, remove vercel ai as a peer dep ([#526](https://github.com/erickirt/langwatch/issues/526)) ([67e4bc9](https://github.com/erickirt/langwatch/commit/67e4bc9a16e8cf71641437452d8909e152585f78))
* prepare typescript sdk ([#622](https://github.com/erickirt/langwatch/issues/622)) ([9b85394](https://github.com/erickirt/langwatch/commit/9b85394d779c29930d8ec41c50195410e9d5619a))
* readme was from an early draft of the typescript sdk ([#662](https://github.com/erickirt/langwatch/issues/662)) ([5a2b115](https://github.com/erickirt/langwatch/commit/5a2b1151a0cd286390561c274a53b30ad73bad91))
* remove dspy and litellm from being mandatory dependencies and update strands version ([#578](https://github.com/erickirt/langwatch/issues/578)) ([0af71f8](https://github.com/erickirt/langwatch/commit/0af71f89b64cde5a5dfbc6384a39784198f21a9e))
* revert change to LangWatchExporter constructor to prevent behaviour change ([#527](https://github.com/erickirt/langwatch/issues/527)) ([21dd188](https://github.com/erickirt/langwatch/commit/21dd18810d447919d12a503a4f5f331041b67126))
* some sdk endpoint fallbacks were to incorrect endpoints ([#548](https://github.com/erickirt/langwatch/issues/548)) ([6d63122](https://github.com/erickirt/langwatch/commit/6d63122b928de31399d00c360fa0c351df166906))
* traced prompt output & typescript default import issue ([#558](https://github.com/erickirt/langwatch/issues/558)) ([21cc4cf](https://github.com/erickirt/langwatch/commit/21cc4cfddbda2a93ad5339a39a2f901746c97195))
* typescript sdk loicense badge to be mit and use correct logo path ([#660](https://github.com/erickirt/langwatch/issues/660)) ([688429d](https://github.com/erickirt/langwatch/commit/688429dc574167631091842690cd2c43867dd5da))
* udpate OpenTelemetry in SDK ([#417](https://github.com/erickirt/langwatch/issues/417)) ([de3e847](https://github.com/erickirt/langwatch/commit/de3e847fab1a9a14d92c7ab12f3bb1de3fa9bfce))
* updating prompt after a sync ([9a2bfc4](https://github.com/erickirt/langwatch/commit/9a2bfc45d05d7b23d006f5a3896fb3228bf93c3e))


### Miscellaneous

* add release please ([#624](https://github.com/erickirt/langwatch/issues/624)) ([e46cd21](https://github.com/erickirt/langwatch/commit/e46cd210e09c5dde95f030c3f92014f882272944))
* improve typescript sdk dependencies to play nicer with other children ([#659](https://github.com/erickirt/langwatch/issues/659)) ([da3daa9](https://github.com/erickirt/langwatch/commit/da3daa9a8013b1eb568ee256b33227fe57f9dafe))
* **main:** release typescript-sdk 0.5.1 ([#627](https://github.com/erickirt/langwatch/issues/627)) ([1f5c9bc](https://github.com/erickirt/langwatch/commit/1f5c9bcb68ba3ccb4d18cdd21e730c88a9989f02))
* release main ([#639](https://github.com/erickirt/langwatch/issues/639)) ([662b654](https://github.com/erickirt/langwatch/commit/662b654e522b3453628b883a7009b3bf95ef8645))
* release main ([#644](https://github.com/erickirt/langwatch/issues/644)) ([702e5d1](https://github.com/erickirt/langwatch/commit/702e5d1120a635537e6e2d4c6817156debe366fb))
* release main ([#655](https://github.com/erickirt/langwatch/issues/655)) ([6d7edc9](https://github.com/erickirt/langwatch/commit/6d7edc9e9e0a74f7e6a728320845edb56b45febe))
* release main ([#661](https://github.com/erickirt/langwatch/issues/661)) ([73f524f](https://github.com/erickirt/langwatch/commit/73f524f794a5e1cea46eb09ed492ad3351a7161f))
* release main ([#706](https://github.com/erickirt/langwatch/issues/706)) ([61f8027](https://github.com/erickirt/langwatch/commit/61f802722837c2a3a6ad1864f6b3625b1b111d7a))
* update typescript sdk examples ([#413](https://github.com/erickirt/langwatch/issues/413)) ([dafe461](https://github.com/erickirt/langwatch/commit/dafe46160974213465431c0c8bd96a12ca4f28a1))


### Code Refactoring

* improved type safety and SRP services ([#611](https://github.com/erickirt/langwatch/issues/611)) ([1270e4b](https://github.com/erickirt/langwatch/commit/1270e4b1ef3447d65d2d0fb9b5264a3d5a727547))

## [0.7.3](https://github.com/langwatch/langwatch/compare/typescript-sdk@v0.7.2...typescript-sdk@v0.7.3) (2025-10-13)


### Bug Fixes

* find local prompt ([#700](https://github.com/langwatch/langwatch/issues/700)) ([ab42400](https://github.com/langwatch/langwatch/commit/ab42400dea353dd72f5be66004f0cb9a11f2e7d2))

## [0.7.2](https://github.com/langwatch/langwatch/compare/typescript-sdk@v0.7.1...typescript-sdk@v0.7.2) (2025-10-02)


### Bug Fixes

* readme was from an early draft of the typescript sdk ([#662](https://github.com/langwatch/langwatch/issues/662)) ([5a2b115](https://github.com/langwatch/langwatch/commit/5a2b1151a0cd286390561c274a53b30ad73bad91))
* typescript sdk loicense badge to be mit and use correct logo path ([#660](https://github.com/langwatch/langwatch/issues/660)) ([688429d](https://github.com/langwatch/langwatch/commit/688429dc574167631091842690cd2c43867dd5da))

## [0.7.1](https://github.com/langwatch/langwatch/compare/typescript-sdk@v0.7.0...typescript-sdk@v0.7.1) (2025-09-22)


### Miscellaneous

* improve typescript sdk dependencies to play nicer with other children ([#659](https://github.com/langwatch/langwatch/issues/659)) ([da3daa9](https://github.com/langwatch/langwatch/commit/da3daa9a8013b1eb568ee256b33227fe57f9dafe))

## [0.7.0](https://github.com/langwatch/langwatch/compare/typescript-sdk@v0.6.0...typescript-sdk@v0.7.0) (2025-09-19)


### Features

* improve helm chart ([#608](https://github.com/langwatch/langwatch/issues/608)) ([699b8f0](https://github.com/langwatch/langwatch/commit/699b8f0a9ce3b05058141f00281a5b68f9874978))

## [0.6.0](https://github.com/langwatch/langwatch/compare/typescript-sdk@v0.5.1...typescript-sdk@v0.6.0) (2025-09-18)


### Features

* guaranteed availability ([#630](https://github.com/langwatch/langwatch/issues/630)) ([d4d3f55](https://github.com/langwatch/langwatch/commit/d4d3f553daaeaba1d3576141f40fc182ef2b21bf))

## [0.5.1](https://github.com/langwatch/langwatch/compare/typescript-sdk@0.5.0...typescript-sdk@v0.5.1) (2025-09-11)


### Miscellaneous

* add release please ([#624](https://github.com/langwatch/langwatch/issues/624)) ([e46cd21](https://github.com/langwatch/langwatch/commit/e46cd210e09c5dde95f030c3f92014f882272944))
