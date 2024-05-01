# [jslib-base](https://github.com/yanhaijing/jslib-base)

[![](https://img.shields.io/badge/Powered%20by-jslib%20base-brightgreen.svg)](https://github.com/yanhaijing/jslib-base)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/yanhaijing/jslib-base/blob/master/LICENSE)
[![npm](https://img.shields.io/badge/npm-3.0.6-orange.svg)](https://www.npmjs.com/package/@js-lib/cli)
[![NPM downloads](http://img.shields.io/npm/dm/@js-lib/cli.svg?style=flat-square)](http://www.npmtrends.com/@js-lib/cli)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/yanhaijing/jslib-base.svg)](http://isitmaintained.com/project/yanhaijing/jslib-base 'Percentage of issues still open')

[English](./README.md) | 简体中文

最好用的 `JS|TS` 第三方库脚手架，10 秒快速搭建一个 `JS|TS` 库的基础框架。

**基于 jslib-base 的库，都可以分享到[jsmini](https://github.com/jsmini)平台**

## :star: 特性

- 交互式新建命令行
- 提供升级功能，老库一键升级
- 支持 JavaScript 和 TypeScript 两种语言
- 构建打包方案
  - typescript + babel + rollup
  - 第三方依赖自动注入（支持 tree shaking）
- 多环境适配
  - 支持浏览器原生 script 使用
  - 提供 UMD, ESM 模块，支持 Webpack，Vite 等生态引用
  - 适配 Node.js 新旧模块，commonjs + ESM
- 代码风格与校验（eslint + prettier + husky + lint-staged）
- 单元测试套件（mocha + expect.js + istanbul + nyc + coveralls）
- commit lint（commitlint + commitizen）
- GitHub Actions (ci + release)
- 本地服务器（http-server）

## :rocket: 使用者指南

新建一个项目，推荐使用 Node.js 18 及以上版本。

```bash
$ npx @js-lib/cli new mylib
# 交互式询问，输入项目信息
$ cd mylib
$ npm i
```

更新项目，只需在项目根目录执行如下命令。

```bash
$ npx @js-lib/cli update
```

对于旧项目，不能直接执行 update 命令，可以先初始化一个配置文件。

```bash
$ npx @js-lib/cli new -c
```

目录简介

```
.
├── demo 使用 demo
├── dist 编译产出代码
├── doc 项目文档
├── src 源代码目录
├── test 单元测试
├── CHANGELOG.md 变更日志
└── TODO.md 计划功能
```

常用命令脚本。

```bash
$ npm run lint # 校验代码
$ npm run test # 运行单测
$ npm run build # 构建代码
$ npm run release # 发布代码
$ npm publish # 发布到 npm
```

## :kissing_heart: 贡献者指南

如果你想修 cli 生成的库代码，可以直接修改模版代码，这比较简单，合并后我会将模版搬运到cli，模版仓库如下：

- [jslib](https://github.com/yanhaijing/jslib)
- [tslib](https://github.com/yanhaijing/tslib)

本项目使用 lerna 来管理多个插件，lerna 常用命令如下：

```bash
$ npx lerna init # 初始化
$ npx lerna create @js-lib/todo # 创建一个package
$ npx lerna add yargs --scope=@js-lib/cli # 给package安装依赖
$ npx lerna list # 列出所有的包
$ npx lerna bootstrap # 安装全部依赖
$ npx lerna link # 建立全部软连接
$ npx lerna changed # 列出下次发版npx lerna publish 要更新的包
```

不打 tag 发布。

```bash
$ npx lerna version --no-git-tag-version # 仅修改version
$ npx lerna publish from-package --dist-tag next # 发布测试包，需要选择对应的 alpha 版本号
$ npx lerna publish from-package # 发布正式包
```

打 tag 发布。

```bash
$ npx lerna publish --dist-tag next # 发布测试包，需要选择对应的 alpha 版本号
$ npx lerna publish # 发布正式包
```

## 贡献者列表

[contributors](https://github.com/yanhaijing/jslib-base/graphs/contributors)

## :gear: 更新日志

[CHANGELOG.md](./CHANGELOG.md)

## :airplane: 计划列表

[TODO.md](./TODO.md)

## :bulb: 谁在使用

- [jsmini](https://github.com/jsmini)
- [template.js](https://github.com/yanhaijing/template.js)
- [shin-monitor](https://github.com/pwstrick/shin-monitor)
- [baselib](https://github.com/LesixCoder/utils)
- [streaming-json-js](https://github.com/karminski/streaming-json-js)
- [better-js-lib](https://github.com/SFTC/better-js-lib)
- [...](https://github.com/yanhaijing/jslib-base/issues/10)

## 参考文档

- [Lerna 中文教程详解](https://juejin.im/post/5ced1609e51d455d850d3a6c)
