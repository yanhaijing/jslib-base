# [jslib-base](https://github.com/yanhaijing/jslib-base)
[![](https://img.shields.io/badge/Powered%20by-jslib%20base-brightgreen.svg)](https://github.com/yanhaijing/jslib-base)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/yanhaijing/jslib-base/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/yanhaijing/jslib-base.svg?branch=master)](https://travis-ci.org/yanhaijing/jslib-base)
[![Coveralls](https://img.shields.io/coveralls/yanhaijing/jslib-base.svg)](https://coveralls.io/github/yanhaijing/jslib-base)
[![npm](https://img.shields.io/badge/npm-0.1.0-orange.svg)](https://www.npmjs.com/package/jslib-base)
[![NPM downloads](http://img.shields.io/npm/dm/jslib-base.svg?style=flat-square)](http://www.npmtrends.com/jslib-base)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/yanhaijing/jslib-base.svg)](http://isitmaintained.com/project/yanhaijing/jslib-base "Percentage of issues still open")

English | [简体中文](./README.zh-CN.md)

The best third party `JS|TS` library scaffold. By forking or cloning the repository, you can complete the basic framework for building a new library.

**The library that based jslib-base can be shared to the [jsmini](https://github.com/jsmini) platform**

## Characteristics

- Coded in ES6+ or TypeScript, easily compile and generate production code
- Integrated babel-runtime (Default set to closed)
- Third parties rely on automatic injection(Tree shaking)
- Supports multi environment, including default browsers, Node, AMD, CMD, Webpack, Rollup, Fis and so on.
- Integrated code style lint(eslint|tslint).
- Integrated unit test environment(mocha).
- Integrated test coverage(istanbul).
- Integrated continuous integration tool [travis-ci](https://www.travis-ci.org/)
- Supports banner
- Supports one-key renaming.
- Supports [sideEffects](https://github.com/webpack/webpack/tree/master/examples/side-effects)
- Integrated Issue template
- Integrated [jsmini](https://github.com/jsmini)

**Note:** When `export` and `export default` are not used at the same time, there is the option to 
turn on `legacy mode`. Under `legacy mode`, the module system can be compatible with `IE6-8`. For more information on legacy mode, 
please see rollup supplemental file. 

## Compatibility
Unit tests guarantee support on the following environment:

| IE   | CH   | FF   | SF   | OP   | IOS  | Android   | Node  |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----- |
| 6+   | 29+ | 55+  | 9+   | 50+  | 9+   | 4+   | 4+ |

> Note: Compiling code depend on ES5, so you need import [es5-shim](http://github.com/es-shims/es5-shim/) to compatible with `IE6-8`, here is a [demo](./demo/demo-global.html)

## Directory
```
├── demo - Using demo
├── dist - Compiler output code
├── doc - Project documents
├── src - Source code directory
├── test - Unit tests
├── CHANGELOG.md - Change log
└── TODO.md - Planned features
```

## Usage Instructions

Using npm, download and install the code. 

```bash
$ npm install --save jslib-base
```

For node environment：

```js
var base = require('jslib-base');
```

For webpack or similar environment：

```js
import base from 'jslib-base';
```

For requirejs environment:

```js
requirejs(['node_modules/jslib-base/dist/index.aio.js'], function (base) {
    // do something...
})
```

For browser environment:

```html
<script src="node_modules/jslib-base/dist/index.aio.js"></script>
```

## Documents
[API](./doc/api.md)

## Contribution Guide

How to switch `JS` and `TS`

- `srctype` and `scripts` in `package.json`
- `require` file of `test/test.js`
- `require` file of `test/browser/index.html`

For the first time to run, you need to install dependencies firstly.

```bash
$ npm install
```

To build the project:

```bash
$ npm run build
```

To run unit tests:

```bash
$ npm test
```

> Note: The browser environment needs to be tested manually under ```test/browser```

Modify the version number in package.json, modify the version number in README.md, modify the CHANGELOG.md, and then release the new version.

```bash
$ npm run release
```

Publish the new version to NPM.

```bash
$ npm publish
```

For renaming project, you need change `fromName` and `toName` in `rename.js`, then run `npm run rename`, this command will auto renaming names for below files:

- The messages in README.md
- The messages in package.json
- The messages in config/rollup.js
- The repository name in test/browser/index.html
- Library name in demo/demo-global.html

## Contributors

[contributors](https://github.com/yanhaijing/jslib-base/graphs/contributors)

## Change Log
[CHANGELOG.md](./CHANGELOG.md)

## TODO
[TODO.md](./TODO.md)

## Current Users

jsmini

- [type](https://github.com/jsmini/type)
- [is](https://github.com/jsmini/is)
- [inherits](https://github.com/jsmini/inherits)
- [guid](https://github.com/jsmini/guid)
- [clone](https://github.com/jsmini/clone)
- [extend](https://github.com/jsmini/extend)
- [event](https://github.com/jsmini/event)
- [url](https://github.com/jsmini/url)
- [querystring](https://github.com/jsmini/querystring)
- [pubsub](https://github.com/jsmini/pubsub)
- [load](https://github.com/jsmini/load)
- [md5](https://github.com/jsmini/md5)
- [console](https://github.com/jsmini/console)

other

- [littlejs](https://github.com/Zenquan/littlejs)
- [axios-miniprogram-adapter](https://github.com/bigmeow/axios-miniprogram-adapter)
- [react-compare](https://github.com/fXy-during/react-compare)
- [z](https://github.com/PinghuaZhuang/z)
- [xidux](https://github.com/ximolang/xidux)
- [qrcode-decoder](https://github.com/yugasun/qrcode-decoder)
- [search-util](https://github.com/The-End-Hero/search-util)
- [vue-validate](https://github.com/yesixuan/vue-validate)
- [validator](https://github.com/yesixuan/common-validate)

## Relative links

- [typescript-library-template](https://github.com/jiumao-fe/typescript-library-template)
