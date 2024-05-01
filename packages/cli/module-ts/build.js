const path = require('path');
const util = require('../util/copy');

function init(cmdPath, name, option) {
  console.log('build: init');

  util.copyTmpl(
    path.resolve(__dirname, `./template/build-rollup.cjs.tmpl`),
    path.resolve(cmdPath, name, 'config/rollup.cjs'),
    option,
  );
}

function update(cmdPath, option) {
  console.log('build: update');

  // 删除 1.x 版本的无用数据
  util.deleteJSONKeys(
    {
      scripts: {
        'build:aio.min': undefined,
      },
      dependencies: {
        '@babel/runtime': undefined,
      },
      devDependencies: {
        'babel-core': undefined,
        'babel-preset-env': undefined,
        'rollup-plugin-babel': undefined,
        'rollup-plugin-commonjs': undefined,
        'rollup-plugin-node-resolve': undefined,
        '@babel/cli': undefined,
        '@babel/core': undefined,
        'rollup-plugin-uglify': undefined,
      },
    },
    path.resolve(cmdPath, './package.json'),
  );
  util.deleteDir(path.resolve(cmdPath, './config'));

  util.copyDir(
    path.resolve(__dirname, `./template/base/config`),
    path.resolve(cmdPath, 'config'),
  );

  util.copyTmpl(
    path.resolve(__dirname, `./template/build-rollup.cjs.tmpl`),
    path.resolve(cmdPath, 'config/rollup.cjs'),
    option,
  );

  util.copyFile(
    path.resolve(__dirname, `./template/base/tsconfig.json`),
    path.resolve(cmdPath, 'tsconfig.json'),
  );
}

module.exports = {
  init: init,
  update: update,
};
