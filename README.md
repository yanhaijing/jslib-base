# [jslib-base](https://github.com/yanhaijing/jslib-base)
[![](https://img.shields.io/badge/Powered%20by-jslib%20base-brightgreen.svg)](https://github.com/yanhaijing/jslib-base)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/yanhaijing/jslib-base/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/yanhaijing/jslib-base.svg?branch=master)](https://travis-ci.org/yanhaijing/jslib-base)
[![npm](https://img.shields.io/badge/npm-0.2.0-orange.svg)](https://www.npmjs.com/package/jslib-base)
[![NPM downloads](http://img.shields.io/npm/dm/jslib-base.svg?style=flat-square)](http://www.npmtrends.com/jslib-base)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/yanhaijing/jslib-base.svg)](http://isitmaintained.com/project/yanhaijing/jslib-base "Percentage of issues still open")

最好用的js第三方库脚手架，fork或clone本仓库，即可搭建完成一个新库的基础框架

## 特性

- ES6编写源码，编译生成生产代码
- 集成 babel-runtime (默认关闭)
- 第三方依赖自动注入（自动剔除第三方依赖无用代码tree shaking）
- 多环境支持（支持浏览器原生，支持AMD，CMD，支持Webpack，Rollup，fis等，支持Node）
- 集成单元测试环境
- 集成代码风格校验eslint
- 集成可持续构建工具[travis-ci](https://www.travis-ci.org/)
- 支持自定义banner
- 集成[jsmini](https://github.com/jsmini)
- 集成ISSUE_TEMPLATE
- 支持[sideEffects](https://juejin.im/post/5b4ff9ece51d45190c18bb65)
- 支持一键重命名

**注意: 如果不同时使用 export 与 export default 可打开legacy模式，legacy模式下的模块系统可以兼容ie6-8，见rollup配置文件**

## 兼容性
单元测试保证支持如下环境：

| IE   | CH   | FF   | SF   | OP   | IOS  | 安卓   | Node  |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----- |
| 6+   | 23+  | 4+   | 6+   | 10+  | 5+   | 2.3+ | 0.10+ |

**注意：编译代码依赖ES5环境，对于ie6-8需要引入[es5-shim](http://github.com/es-shims/es5-shim/)才可以兼容，可以查看[demo/demo-global.html](../demo/demo-global.html)中的例子**

## 目录介绍

```
.
├── demo 使用demo
├── dist 编译产出代码
├── doc 项目文档
├── src 源代码目录
├── test 单元测试
├── CHANGELOG.md 变更日志
└── TODO.md 计划功能
```

## 使用者指南
通过npm下载安装代码

```bash
$ npm install --save jslib-base
```

如果你是node环境

```js
var base = require('jslib-base');
```

如果你是webpack等环境

```js
import base from 'jslib-base';
```

如果你是requirejs环境

```js
requirejs(['node_modules/jslib-base/dist/index.aio.js'], function (base) {
    // xxx
})
```

如果你是浏览器环境

```html
<script src="node_modules/jslib-base/dist/index.aio.js"></script>
```

## 文档
[API](https://github.com/yanhaijing/jslib-base/blob/master/doc/api.md)

## 贡献者指南
首次运行需要先安装依赖

```bash
$ npm install
```

一键打包生成生产代码

```bash
$ npm run build
```

运行单元测试，浏览器环境需要手动测试，位于`test/browser`

```bash
$ npm test
```

修改package.json中的版本号，修改README.md中的版本号，修改CHANGELOG.md，然后发布新版

```bash
$ npm run release
```

将新版本发布到npm

```bash
$ npm publish
```

重命名项目名称，首次初始化项目是需要修改名字，或者后面项目要改名时使用，需要修改`rename.js`中的`fromName`和`toName`，会自动重命名下面文件中的名字

- README.md 中的信息
- package.json 中的信息
- config/rollup.js 中的信息
- test/browser/index.html 中的仓库名称

```bash
$ npm run rename # 重命名命令
```
## 贡献者列表
[contributors](https://github.com/yanhaijing/jslib-base/graphs/contributors)

## 更新日志
[CHANGELOG.md](https://github.com/yanhaijing/jslib-base/blob/master/CHANGELOG.md)

## 计划列表
[TODO.md](https://github.com/yanhaijing/jslib-base/blob/master/TODO.md)

## 谁在使用

- [@jsmini/base](https://github.com/jsmini/base)
- [@jsmini/type](https://github.com/jsmini/type)
- [@jsmini/is](https://github.com/jsmini/is)
- [@jsmini/guid](https://github.com/jsmini/guid)
- [@jsmini/clone](https://github.com/jsmini/clone)
- [@jsmini/extend](https://github.com/jsmini/extend)
- [@jsmini/event](https://github.com/jsmini/event)
- [@jsmini/inherits](https://github.com/jsmini/inherits)
- [@jsmini/console](https://github.com/jsmini/console)
