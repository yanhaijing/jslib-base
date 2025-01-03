const path = require('path');
const {
  copyDir,
  copyFile,
  copyTmpl,
  deleteFile,
  replaceFileLine,
  deleteFileLine,
} = require('../util/copy');
const log = require('../util/log');

log.init();

function init(cmdPath, name, option) {
  console.log('root: init');

  copyDir(
    path.resolve(__dirname, `./template/base`),
    path.resolve(cmdPath, name),
    {
      mode: true,
    },
  );
  copyTmpl(
    path.resolve(__dirname, `./template/license.tmpl`),
    path.resolve(cmdPath, name, './LICENSE'),
    option,
  );
  copyTmpl(
    path.resolve(__dirname, `./template/README.en.md.tmpl`),
    path.resolve(cmdPath, name, './README.md'),
    option,
  );
  copyTmpl(
    path.resolve(__dirname, `./template/README.zh.md.tmpl`),
    path.resolve(cmdPath, name, './README.zh.md'),
    option,
  );
}

function update(cmdPath, option) {
  console.log('root: update');
  copyFile(
    path.resolve(__dirname, `./template/base/.editorconfig`),
    path.resolve(cmdPath, '.editorconfig'),
  );

  copyFile(
    path.resolve(__dirname, `./template/base/.vscode/extensions.json`),
    path.resolve(cmdPath, '.vscode/extensions.json'),
  );

  copyFile(
    path.resolve(__dirname, `./template/base/.vscode/settings.json`),
    path.resolve(cmdPath, '.vscode/settings.json'),
  );

  copyFile(
    path.resolve(__dirname, `./template/base/.github/FUNDING.yml`),
    path.resolve(cmdPath, '.github/FUNDING.yml'),
  );

  copyFile(
    path.resolve(__dirname, `./template/base/.github/workflows/ci.yml`),
    path.resolve(cmdPath, '.github/workflows/ci.yml'),
  );

  copyFile(
    path.resolve(__dirname, `./template/base/.gitignore`),
    path.resolve(cmdPath, '.gitignore'),
  );

  // 删除 1.x 版本的无用数据
  deleteFile(path.resolve(cmdPath, '.travis.yml'));
  replaceFileLine(
    path.resolve(cmdPath, 'README.md'),
    /\[Build Status\]/,
    `[![CI](https://github.com/${option.username}/${option.name}/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/${option.username}/${option.name}/actions/workflows/ci.yml)`,
  );
  deleteFileLine(path.resolve(cmdPath, 'README.md'), /\[Coveralls\]/);
}

module.exports = {
  init: init,
  update: update,
};
