const path = require('path');
const util = require('../util/copy');

function init(_cmdPath, _name, _option) {
  console.log('lint: init');
}

function update(cmdPath, _option) {
  console.log('lint: update');

  util.copyDir(
    path.resolve(__dirname, `./template/base/.husky`),
    path.resolve(cmdPath, '.husky'),
    {
      mode: true,
    },
  );
  util.copyFile(
    path.resolve(__dirname, `./template/base/.lintstagedrc.cjs`),
    path.resolve(cmdPath, '.lintstagedrc.cjs'),
  );
  util.copyFile(
    path.resolve(__dirname, `./template/base/.prettierignore`),
    path.resolve(cmdPath, '.prettierignore'),
  );
  util.copyFile(
    path.resolve(__dirname, `./template/base/.prettierrc.json`),
    path.resolve(cmdPath, '.prettierrc.json'),
  );
  util.copyFile(
    path.resolve(__dirname, `./template/base/commitlint.config.js`),
    path.resolve(cmdPath, 'commitlint.config.js'),
  );
  util.copyFile(
    path.resolve(__dirname, `./template/base/.eslintrc.cjs`),
    path.resolve(cmdPath, '.eslintrc.cjs'),
  );
  util.copyFile(
    path.resolve(__dirname, `./template/base/.eslintignore`),
    path.resolve(cmdPath, '.eslintignore'),
  );

  // 删除 1.x 版本的无用数据
  util.deleteFile(path.resolve(cmdPath, '.eslintrc.js'));
}

module.exports = {
  init: init,
  update: update,
};
