# [jslib-base](https://github.com/yanhaijing/jslib-base)

[![](https://img.shields.io/badge/Powered%20by-jslib%20base-brightgreen.svg)](https://github.com/yanhaijing/jslib-base)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/yanhaijing/jslib-base/blob/master/LICENSE)
[![npm](https://img.shields.io/badge/npm-2.3.4-orange.svg)](https://www.npmjs.com/package/@js-lib/cli)
[![NPM downloads](http://img.shields.io/npm/dm/@js-lib/cli.svg?style=flat-square)](http://www.npmtrends.com/@js-lib/cli)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/yanhaijing/jslib-base.svg)](http://isitmaintained.com/project/yanhaijing/jslib-base 'Percentage of issues still open')
![example workflow](https://github.com/yanhaijing/jslib-base/actions/workflows/ci.yml/badge.svg)

English | [简体中文](./README.zh-CN.md)

The best `JS|TS` third-party library scaffold, quickly setup the basic framework of a new library in 10 seconds.

**Libraries based on jslib-base can be shared on the [jsmini](https://github.com/jsmini) platform.**

## :star: Features

- Command-line tool for quick creation and seamless upgrades
- Supports writing source code in ES6+ or TypeScript, and compiles to generate production code
- Auto-injection of third-party dependencies (automatically removes unnecessary code in third-party dependencies through tree shaking)
- Supports multiple environments (native browser, AMD, commonjs, Webpack, Rollup, vite, fis, Node.js, etc.)
- Integrated code style checker (eslint + prettier + husky)
- Integrated unit test environment (mocha)
- Integrated test coverage report (istanbul+nyc)
- Integrated continuous integration tool github action
- Integrated with [jsmini](https://github.com/jsmini)

## :rocket: User Guide

To create a new project, it is recommended to use Node.js version 16 or higher.

```bash
$ npx @js-lib/cli new mylib
# Interactive queries, input project info
$ cd mylib
$ npm i
```

To update the project, just execute the following command in the project root directory.

```bash
$ npx @js-lib/cli update
```

For old projects, you can't directly execute the update command, you can first initialize a config file.

```bash
$ npx @js-lib/cli new -c
```

Directory Overview

```
.
├── demo Usage demo
├── dist Compiled out code
├── doc Project documents
├── src Source code directory
├── test Unit tests
├── CHANGELOG.md Change log
└── TODO.md To-do features
```

Common command scripts

```bash
$ npm run lint
$ npm run test
$ npm run build
$ npm run release
$ npm publish
```

## Contribution Guide

This project uses lerna to manage multiple plugins, common lerna commands are:

```bash
$ npx lerna init # Initialization
$ npx lerna create @js-lib/todo # Create a package
$ npx lerna add yargs --scope=@js-lib/cli # Install dependencies for a package
$ npx lerna list # List all the packages
$ npx lerna bootstrap # Install all dependencies
$ npx lerna link # Create all links
$ npx lerna changed # List the packages to be updated in the next release
$ npx lerna publish # Release with tag, upload to git, upload to npm
```

## Contributors

[contributors](https://github.com/yanhaijing/jslib-base/graphs/contributors)

## Change Log

[CHANGELOG.md](./CHANGELOG.md)

## TODO

[TODO.md](./TODO.md)

## Current Users

- [jsmini](https://github.com/jsmini)
- [template.js](https://github.com/yanhaijing/template.js)
- [...](https://github.com/yanhaijing/jslib-base/issues/10)

## Relative links

- [Lerna 中文教程详解](https://juejin.im/post/5ced1609e51d455d850d3a6c)
