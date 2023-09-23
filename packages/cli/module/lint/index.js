const path = require('path');
const util = require('../../util/copy');

function init(cmdPath, name, option) {
  console.log('lint: init');
  const type = option.type;
  util.copyDir(
    path.resolve(__dirname, `./template/base`),
    path.resolve(cmdPath, name),
    {
      mode: true,
    },
  );
  util.copyFile(
    path.resolve(__dirname, `./template/.eslintrc.${type}.cjs`),
    path.resolve(cmdPath, name, '.eslintrc.cjs'),
  );
  util.copyFile(
    path.resolve(__dirname, `./template/.eslintignore-${type}`),
    path.resolve(cmdPath, name, '.eslintignore'),
  );
  util.mergeJSON2JSON(
    path.resolve(__dirname, `./template/package.${type}.json`),
    path.resolve(cmdPath, name, './package.json'),
  );
}

function update(cmdPath, option) {
  console.log('lint: update');

  const type = option.type;
  util.copyDir(
    path.resolve(__dirname, `./template/base`),
    path.resolve(cmdPath),
    {
      mode: true,
    },
  );
  util.copyFile(
    path.resolve(__dirname, `./template/.eslintrc.${type}.cjs`),
    path.resolve(cmdPath, '.eslintrc.cjs'),
  );
  util.copyFile(
    path.resolve(__dirname, `./template/.eslintignore-${type}`),
    path.resolve(cmdPath, '.eslintignore'),
  );

  util.mergeJSON2JSON(
    path.resolve(__dirname, `./template/package.${type}.json`),
    path.resolve(cmdPath, './package.json'),
  );

  // 删除 1.x 版本的无用数据
  util.deleteFile(path.resolve(cmdPath, '.eslintrc.js'));
}

module.exports = {
  init: init,
  update: update,
};
