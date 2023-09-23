const path = require('path');
const util = require('../../util/copy');

function init(cmdPath, name, option) {
  console.log('build: init');
  const type = option.type;

  util.copyTmpl(
    path.resolve(__dirname, `./template/${type}/rollup.cjs.tmpl`),
    path.resolve(cmdPath, name, 'config/rollup.cjs'),
    option,
  );

  util.copyFile(
    path.resolve(__dirname, `./template/${type}/rollup.config.aio.cjs`),
    path.resolve(cmdPath, name, 'config/rollup.config.aio.cjs'),
  );
  util.copyFile(
    path.resolve(__dirname, `./template/${type}/rollup.config.esm.cjs`),
    path.resolve(cmdPath, name, 'config/rollup.config.esm.cjs'),
  );
  util.copyFile(
    path.resolve(__dirname, `./template/${type}/rollup.config.cjs`),
    path.resolve(cmdPath, name, 'config/rollup.config.cjs'),
  );

  util.mergeTmpl2JSON(
    path.resolve(__dirname, `./template/${type}/package.json`),
    path.resolve(cmdPath, name, 'package.json'),
    option,
  );

  if (type === 'ts') {
    util.copyFile(
      path.resolve(__dirname, `./template/ts/tsconfig.json`),
      path.resolve(cmdPath, name, 'tsconfig.json'),
    );
  }
}

function update(cmdPath, option) {
  console.log('build: update');
  const type = option.type;

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

  util.copyTmpl(
    path.resolve(__dirname, `./template/${type}/rollup.cjs.tmpl`),
    path.resolve(cmdPath, 'config/rollup.cjs'),
    option,
  );

  util.copyFile(
    path.resolve(__dirname, `./template/${type}/rollup.config.aio.cjs`),
    path.resolve(cmdPath, 'config/rollup.config.aio.cjs'),
  );

  util.copyFile(
    path.resolve(__dirname, `./template/${type}/rollup.config.esm.cjs`),
    path.resolve(cmdPath, 'config/rollup.config.esm.cjs'),
  );

  util.copyFile(
    path.resolve(__dirname, `./template/${type}/rollup.config.cjs`),
    path.resolve(cmdPath, 'config/rollup.config.cjs'),
  );

  util.mergeTmpl2JSON(
    path.resolve(__dirname, `./template/${type}/package.json`),
    path.resolve(cmdPath, 'package.json'),
    option,
  );

  if (type === 'ts') {
    util.copyFile(
      path.resolve(__dirname, `./template/ts/tsconfig.json`),
      path.resolve(cmdPath, 'tsconfig.json'),
    );
  }
}

module.exports = {
  init: init,
  update: update,
};
