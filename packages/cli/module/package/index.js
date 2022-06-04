const path = require('path');
const util = require('../../util/copy');

function init(cmdPath, name, option) {
  console.log('package: init');
  util.copyTmpl(
    path.resolve(__dirname, `./template/package.json.tmpl`),
    path.resolve(cmdPath, name, 'package.json'),
    option
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
  } = JSON.parse(
    util.readTmpl(
      path.resolve(__dirname, `./template/package.json.tmpl`),
      option
    )
  );

  util.mergeObj2JSON(
    { scripts, sideEffects, devDependencies, dependencies, files, engines },
    path.resolve(cmdPath, 'package.json')
  );
}

module.exports = {
  init: init,
  update: update,
};
