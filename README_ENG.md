# [jslib-base](https://github.com/yanhaijing/jslib-base) [![](https://img.shields.io/badge/Powered%20by-jslib%20base-brightgreen.svg)](https://github.com/yanhaijing/jslib-base) [![npm](https://img.shields.io/badge/npm-0.2.0-orange.svg)](https://www.npmjs.com/package/jslib-base) [![Build Status](https://travis-ci.org/yanhaijing/jslib-base.svg?branch=master)](https://travis-ci.org/yanhaijing/jslib-base) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/yanhaijing/jslib-base/blob/master/LICENSE)
The best third party JS library scaffolder. By forking or cloning the repository, you can complete the basic framework for building a new library.

## Characteristics

- Coded in ES6, easily compile and generate production code
- Integrated babel-runtime (Default set to closed)
- Third parties rely on automatic injection
- Supports default browsers
- Supports AMD，CMD
- Supports Webpack，Rollup，fis, and more
- Supports Node
- Integrated unit test environment
- Integrated eslint
- Integrated [travis-ci](https://www.travis-ci.org/)
- Supports banner

**Note:** When export and export default are not used at the same time, there is the option to 
turn on legacy mode. Under legacy mode, the module system can be compatible with IE6-8. For more information on legacy mode, 
please see rollup supplemental file. 

## Compatibility
Unit tests guarantee support on the following environment:

- Node 4+
- Safari 6+ (Mac)
- iOS 5+ Safari
- Chrome 23+ (Windows, Mac, Android, iOS, Linux, Chrome OS)
- Firefox 4+ (Windows, Mac, Android, Linux)
- Internet Explorer 6+ (Windows, Windows Phone)
- Opera 10+ (Windows, linux, Android)

## Directory
```
├── demo - Using demo
├── dist - Compiler output code
├── doc - Project documents
├── src - Source code directory
├── test - Unit tests
├── CHANGELOG.md - Change log
└── TODO.md - Planned functions
```

## Usage Instructions
Using npm, download and install the code. 

```bash
$ npm install --save jslib_base
```

If you are in a node enviroment：

```js
var base = require('jslib_base');
```

If you are in a webpack or similar environment：

```js
import base from 'jslib_base';
```

If you are in a requirejs environment:

```js
requirejs(['node_modules/jslib_base/dist/index.aio.js'], function (base) {
    // xxx
})
```

If you are in a browser environment:

```html
<script src="node_modules/jslib_base/dist/index.aio.js"></script>
```

## Documents
[API](https://github.com/yanhaijing/jslib-base/blob/master/doc/api.md)

## Contribution Guide

For first time contributors, you need to install the dependencies first.

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
* Note: The browser environment needs to be tested manually under ```test/browser```

Modify the version number in package.json, modify the version number in README.md, modify the CHANGELOG.md, and then release the new version.

```bash
$ npm run release
```

Publish the new version to NPM.

```bash
$ npm publish
```

You may need to modify the following files in your project：

- The messages in README.md
- The messages in package.json
- The messages in config/rollup.js
- The repository name in test/browser/index.html

## Change Log
[CHANGELOG.md](https://github.com/yanhaijing/jslib-base/blob/master/CHANGELOG.md)

## Future Planned Functions
[TODO.md](https://github.com/yanhaijing/jslib-base/blob/master/TODO.md)

## Current Users

- [type.js](https://github.com/yanhaijing/type.js)
- [is.js](https://github.com/yanhaijing/is.js)
- [inherits.js](https://github.com/yanhaijing/inherits.js)
- [guid.js](https://github.com/yanhaijing/guid.js)
- [console.js](https://github.com/yanhaijing/console.js)
- [event.js](https://github.com/yanhaijing/event.js)
