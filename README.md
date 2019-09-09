# jslib-cli

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