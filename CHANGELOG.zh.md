# 变更日志

## 3.0.3 / 2024-5-1

- cli: fix update 时报错

## 3.0.2 / 2024-5-1

- template:jslib: 修复缺少 .gitignore
- template:tslib: 修复缺少 .gitignore

## 3.0.1 / 2024-5-1

- cli: fix init 时报错

## 3.0.0 / 2024-5-1

- cli
  - 架构升级，由 `module` 升级为 `template`
  - 去除 `lang` 参数
  - 交互文案迁移为英文
  - `update` 命令移除参数
  - 添加 CI github actions
  - 提升 nodejs 最低版本支持为 18
- template:jslib
  - 添加 publish npm github actions
  - 提升 nodejs 最低版本支持为 18
  - 升级 rollup v3 -> v4
  - 升级 @commitlint v16 -> v18
  - 升级 nyc v15 -> v17
  - 升级 babel-plugin-istanbul v6 -> v7
  - 升级其他依赖库到最新版
- template:tslib
  - 添加 publish npm github actions
  - 提升 nodejs 最低版本支持为 18
  - 升级 rollup v3 -> v4
  - 升级 @commitlint v16 -> v18
  - 升级 nyc v15 -> v17
  - 升级 @typescript-eslint v6 -> v8
  - 升级 typescript v5.2 -> v5.7
  - 升级其他依赖库到最新版

## 2.3.4 / 2023-11-19

- fix: 升级 template_js@3.1.4

## 2.3.3 / 2023-11-19

- fix: 升级 @jsmini/extend@0.5.0，修复 ts 项目在node16下安装警告的问题

## 2.3.2 / 2023-11-19

- fix: 修复升级 rollup-plugin-typescript2@0.36.0 导致的 tslib 有依赖时 build 报错的问题

## 2.3.1 / 2023-11-19

- 升级 commitlint 依赖

## 2.3.0 / 2023-11-19

- 添加生成 sourceMap 功能
- 新增支持 Node.js v20
- 升级全部依赖到最新版

## 2.2.7 / 2023-10-2

- 优化 README 文档
- 修复 LICENSE 文件中缺失名字的问题

## 2.2.6 / 2023-9-24

- 修复ts项目缺失 @babel/runtime-corejs3 依赖

## 2.2.5 / 2023-9-24

- 更新 README.md 文件
- clean 命令添加删除 types 目录

## 2.2.4 / 2023-9-24

- 更新 CHANGELOG.md 文件

## 2.2.3 / 2023-9-24

- 修复 engines 兼容性信息，保持和构建工具一致

## 2.2.2 / 2023-9-24

- 修复update时删除不存在文件时报错的问题

## 2.2.1 / 2023-9-24

- 更新 README.md 兼容性信息，保持和构建工具一致

## 2.2.0 / 2023-9-24

- 修复ts项目缺少types的问题
- 支持 README.md 文件中 [Build Status] 的替换
- 支持 README.md 文件中 [Coveralls] 的删除

## 2.1.0 / 2023-9-24

- update 命令支持删除 1.x 无用文件和配置

## 2.0.0 / 2023-9-23

- 升级全部工具到最新版
- typescript 库接入 babel 工具
- 添加 prettier
- 添加 commitlint
- 添加 husky
- 添加一个本地 server
- 支持 node exports condition
- 迁移 travis 到 github action
- 去掉 coveralls 的支持
- 减少新建的参数数量，9个 -> 7个

## 1.7.0 / 2023-9-19

- 架构调整, mono => sud module
- 重新验证了项目各种功能
  - 在 node14 中，js 和 ts 项目，功能完好
  - 如果大于 node14 安装依赖可能报错，可以使用`npm i --legacy-peer-deps`

## 1.6.0 / 2019-12-18

- 升级 template.js 版本

## 1.5.1 / 2019-10-20

- 修复`rollup`插件，update 时报错的问题

## 1.5.0 / 2019-10-20

- 新增`test`参数，选择测试方案
- 新增`module`参数，选择模块方案

## 1.4.2 / 2019-10-10

- 修复 npm 发布时丢失 d.ts 的问题

## 1.4.1 / 2019-10-7

- `-c`时不再需要`-f`参数

## 1.4.0 / 2019-10-7

- 增加对 root 插件的 update
- 删除对`@jsmini/type`的依赖

## 1.3.0 / 2019-10-7

- 增加 version 写入配置文件
- `update`增加对文件内容的升级

## 1.2.0 / 2019-10-7

- 增加 umdname 参数

## 1.1.0 / 2019-10-7

- 命令行参数和提示参数一致化处理
- 增加自动安装依赖功能

## 1.0.0 / 2019-10-1

- 架构调整，由 base 改为 cli 工具
- 支持`jslib new`命令
- 支持`jslib update`命令

## 0.6.0 / 2019-6-16

- 统一改用 eslint 校验 js 和 ts

## 0.5.0 / 2018-12-17

- TS 支持测试源文件，改用 nyc

## 0.4.0 / 2018-11-27

- JS 支持测试源文件，改用 nyc

## 0.3.0 / 2018-11-23

- 添加对 typescript 的支持
- 升级 babel7
- 添加对测试覆盖率的支持
- 文档添加 emoji

## 0.2.0 / 2018-3-10

- 支持 banner
- 添加 es5-shim

## 0.1.0 / 2018-3-1

- ES6 编写源码，编译生成生产代码
- 第三方依赖自动注入
- 支持浏览器原生
- 支持 AMD，CMD
- 支持 Webpack，Rollup，fis 等
- 支持 Node
- 集成单元测试环境
- 集成 eslint
- 集成[travis-ci](https://www.travis-ci.org/)
