const path = require('path');
const util = require('../../util/copy');

function init(cmdPath, name, option) {
  console.log('eslint: init');
  const type = option.type;
  util.copyFile(
    path.resolve(__dirname, `./template/.eslintrc.${type}.js`),
    path.resolve(cmdPath, name, '.eslintrc.js')
  );
  util.mergeJSON2JSON(
    path.resolve(__dirname, `./template/package.${type}.json`),
    path.resolve(cmdPath, name, './package.json')
  );
}

function update(cmdPath, option) {
  console.log('eslint: update');

  const type = option.type;
  util.copyFile(
    path.resolve(__dirname, `./template/.eslintrc.${type}.js`),
    path.resolve(cmdPath, '.eslintrc.js')
  );
  util.mergeJSON2JSON(
    path.resolve(__dirname, `./template/package.${type}.json`),
    path.resolve(cmdPath, './package.json')
  );
}

module.exports = {
  init: init,
  update: update,
};
