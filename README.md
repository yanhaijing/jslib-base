# jslib-base [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

xxx

## lerna

```
# 安装命令行工具
npm install -g lerna@3.16.4

# 初始化
lerna init

# 创建一个package
lerna create @js-lib/todo

# 安装依赖
lerna add yargs --scope=@js-lib/cli
lerna add yargs --dev --scope=@js-lib/cli
lerna add @js-lib/todo --scope=@js-lib/cli

# 列出所有的包
lerna list

# 安装全部依赖
lerna bootstrap

# 列出下次发版lerna publish 要更新的包
lerna changed

# 会打tag，上传git,上传npm
lerna publish

# link
cd packages/cli
sudo npm link
```

## 参考文档
- [Lerna 中文教程详解](https://juejin.im/post/5ced1609e51d455d850d3a6c)