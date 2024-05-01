# Change Log

## 3.0.3 / 2024-5-1

- cli: fix update error

## 3.0.2 / 2024-5-1

- template:jslib: fix miss .gitignore
- template:tslib: fix miss .gitignore

## 3.0.1 / 2024-5-1

- cli: fix init error

## 3.0.0 / 2024-5-1

- CLI
  - Architecture upgrade: from `module` to `template`
  - Removed the `lang` parameter
  - Interaction text migrated to English
  - Removed parameters from the `update` command
  - Added CI with GitHub Actions
  - Increased minimum supported Node.js version to 18
- Template: jslib
  - Added publish to npm GitHub Actions
  - Increased minimum supported Node.js version to 18
  - Upgraded Rollup from v3 to v4
  - Upgraded @commitlint from v16 to v18
  - Upgraded nyc from v15 to v17
  - Upgraded babel-plugin-istanbul from v6 to v7
  - Upgraded other dependencies to their latest versions
- Template: tslib
  - Added publish to npm GitHub Actions
  - Increased minimum supported Node.js version to 18
  - Upgraded Rollup from v3 to v4
  - Upgraded @commitlint from v16 to v18
  - Upgraded nyc from v15 to v17
  - Upgraded @typescript-eslint from v6 to v8
  - Upgraded TypeScript from v5.2 to v5.7
  - Upgraded other dependencies to their latest versions

## 2.3.4 / 2023-11-19

- fix: Upgraded `template_js@3.1.4`.

## 2.3.3 / 2023-11-19

- fix: Upgraded `@jsmini/extend@0.5.0` to fix warnings when installing in Node.js 16 for TypeScript projects.

## 2.3.2 / 2023-11-19

- fix: Resolved build errors caused by upgrading `rollup-plugin-typescript2@0.36.0` with `tslib` dependencies.

## 2.3.1 / 2023-11-19

- Upgraded `commitlint` dependencies.

## 2.3.0 / 2023-11-19

- Added `sourceMap` generation functionality.
- Added support for Node.js v20.
- Upgraded all dependencies to the latest versions.

## 2.2.7 / 2023-10-2

- Optimized the `README` documentation.
- Fixed missing names in the `LICENSE` file.

## 2.2.6 / 2023-9-24

- Fixed missing `@babel/runtime-corejs3` dependencies in TypeScript projects.

## 2.2.5 / 2023-9-24

- Updated the `README.md` file.
- Added the deletion of the `types` directory to the `clean` command.

## 2.2.4 / 2023-9-24

- Updated the `CHANGELOG.md` file.

## 2.2.3 / 2023-9-24

- Fixed compatibility information in `engines` to align with the build tool.

## 2.2.2 / 2023-9-24

- Fixed errors when deleting non-existent files during `update`.

## 2.2.1 / 2023-9-24

- Updated compatibility information in `README.md` to align with the build tool.

## 2.2.0 / 2023-9-24

- Fixed missing `types` in TypeScript projects.
- Supported replacement of `[Build Status]` in `README.md`.
- Supported removal of `[Coveralls]` from `README.md`.

## 2.1.0 / 2023-9-24

- `update` command now supports deleting unused files and configurations from version 1.x.

## 2.0.0 / 2023-9-23

- Upgraded all tools to the latest versions.
- Integrated Babel for TypeScript libraries.
- Added `prettier`.
- Added `commitlint`.
- Added `husky`.
- Added a local server.
- Supported `node exports` condition.
- Migrated from Travis CI to GitHub Actions.
- Removed support for Coveralls.
- Reduced the number of parameters for new commands from 9 to 7.

## 1.7.0 / 2023-9-19

- Architectural adjustment from `mono` to `sub-module`.
- Re-verified all project functionalities:
  - Fully functional in Node.js 14 for both JavaScript and TypeScript projects.
  - Dependency installation may fail for versions above Node.js 14. Use `npm i --legacy-peer-deps`.

## 1.6.0 / 2019-12-18

- Upgraded the `template.js` version.

## 1.5.1 / 2019-10-20

- Fixed errors in `rollup` plugins during `update`.

## 1.5.0 / 2019-10-20

- Added `test` parameter to select test strategies.
- Added `module` parameter to select module strategies.

## 1.4.2 / 2019-10-10

- Fixed missing `d.ts` during npm publishing.

## 1.4.1 / 2019-10-7

- Removed the need for the `-f` parameter when using `-c`.

## 1.4.0 / 2019-10-7

- Added support for updating root plugins.
- Removed dependency on `@jsmini/type`.

## 1.3.0 / 2019-10-7

- Added version writing to configuration files.
- Enhanced `update` to support file content upgrades.

## 1.2.0 / 2019-10-7

- Added `umdname` parameter.

## 1.1.0 / 2019-10-7

- Unified CLI and prompt parameter handling.
- Added automatic dependency installation.

## 1.0.0 / 2019-10-1

- Adjusted architecture from `base` to CLI tools.
- Supported `jslib new` command.
- Supported `jslib update` command.

## 0.6.0 / 2019-6-16

- Standardized using `eslint` for both JavaScript and TypeScript.

## 0.5.0 / 2018-12-17

- Added support for testing source files in TypeScript using `nyc`.

## 0.4.0 / 2018-11-27

- Added support for testing source files in JavaScript using `nyc`.

## 0.3.0 / 2018-11-23

- Added support for TypeScript.
- Upgraded to Babel 7.
- Added support for test coverage.
- Added emojis to documentation.

## 0.2.0 / 2018-3-10

- Added `banner` support.
- Added `es5-shim`.

## 0.1.0 / 2018-3-1

- Source code written in ES6 and compiled for production.
- Automatic injection of third-party dependencies.
- Supported native browser usage.
- Supported AMD, CMD.
- Compatible with Webpack, Rollup, and Fis.
- Node.js support.
- Integrated unit testing environment.
- Integrated `eslint`.
- Integrated [Travis CI](https://www.travis-ci.org/).
