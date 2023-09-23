const path = require('path');
const util = require('../../util/copy');

function init(cmdPath, name, option) {
  console.log('package: init');
  const { type } = option;
  util.copyTmpl(
    path.resolve(__dirname, `./template/package.json.tmpl`),
    path.resolve(cmdPath, name, 'package.json'),
    option,
  );

  util.copyTmpl(
    path.resolve(__dirname, `./template/package-lock.${type}.json`),
    path.resolve(cmdPath, name, 'package-lock.json'),
    option,
  );
}

function update(cmdPath, option) {
  console.log('package: update');
  const {
    scripts,
    sideEffects,
    devDependencies,
    dependencies,
    files,
    engines,
    publishConfig,
    exports,
  } = JSON.parse(
    util.readTmpl(
      path.resolve(__dirname, `./template/package.json.tmpl`),
      option,
    ),
  );

  // 删除 1.x 版本的无用数据
  util.deleteJSONKeys(
    {
      'jsnext:main': undefined,
    },
    path.resolve(cmdPath, 'package.json'),
  );

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
    },
    path.resolve(cmdPath, 'package.json'),
  );
}

module.exports = {
  init: init,
  update: update,
};
