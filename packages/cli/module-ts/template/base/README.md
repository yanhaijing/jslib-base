# [tslibname](https://github.com/tslibusername/tslibname)
[![](https://img.shields.io/badge/Powered%20by-jslib%20base-brightgreen.svg)](https://github.com/tslibusername/jslib-base)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/tslibusername/tslibname/blob/master/LICENSE)
[![CI](https://github.com/tslibusername/tslibname/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/tslibusername/tslibname/actions/workflows/ci.yml)
[![npm](https://img.shields.io/badge/npm-0.1.0-orange.svg)](https://www.npmjs.com/package/tslibname)
[![NPM downloads](http://img.shields.io/npm/dm/tslibname.svg?style=flat-square)](http://www.npmtrends.com/tslibname)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tslibusername/tslibname.svg)](http://isitmaintained.com/project/tslibusername/tslibname "Percentage of issues still open")

The best third party `JS|TS` library scaffold. 

## Characteristics

- Coded in ES6+ or TypeScript, easily compile and generate production code
- Supports multi environment, including default browsers, Node, AMD, CMD, Webpack, Rollup, Fis and so on.
- Integrated [jsmini](https://github.com/jsmini)

**Note:** When `export` and `export default` are not used at the same time, there is the option to 
turn on `legacy mode`. Under `legacy mode`, the module system can be compatible with `IE6-8`. For more information on legacy mode, 
please see rollup supplemental file. 

## Compatibility
Unit tests guarantee support on the following environment:

| IE   | CH   | FF   | SF   | OP   | IOS  | Android   | Node  |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----- |
| 11+   | 100+ | 100+  | 16+   | 100+  | 10.3+   | 4.1+   | 14+ |

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
$ npm install --save tslibname
```

For node environment：

```js
const tslibname = require('tslibname');
```

For webpack or similar environment：

```js
import tslibname from 'tslibname';
```

For browser environment:

```html
<script src="node_modules/tslibname/dist/index.aio.js"></script>
```

## Documents
[API](./doc/api.md)

## Contribution Guide
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

## Contributors

[contributors](https://github.com/tslibusername/tslibname/graphs/contributors)

## Change Log
[CHANGELOG.md](./CHANGELOG.md)

## TODO
[TODO.md](./TODO.md)