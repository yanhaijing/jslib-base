const path = require('path');
const util = require('../util/copy');

function init(cmdPath, name, option) {
  console.log('package: init');
  util.mergeTmpl2JSON(
    path.resolve(__dirname, `./template/package.json.tmpl`),
    path.resolve(cmdPath, name, 'package.json'),
    option,
  );
}

function update(cmdPath, _option) {
  console.log('package: update');
  // 删除 1.x 版本的无用数据
  util.deleteJSONKeys(
    {
      'jsnext:main': undefined,
    },
    path.resolve(cmdPath, 'package.json'),
  );

  const {
    scripts,
    sideEffects,
    devDependencies,
    dependencies,
    files,
    engines,
    publishConfig,
    exports,
    types,
    config,
  } = util.readJSON(path.resolve(__dirname, `./template/base/package.json`));

  util.mergeObj2JSON(
    {
      scripts,
      sideEffects,
      devDependencies,
      dependencies,
      files,
      engines,
      publishConfig,
      exports,
      types,
      config,
    },
    path.resolve(cmdPath, 'package.json'),
  );
}

module.exports = {
  init: init,
  update: update,
};
