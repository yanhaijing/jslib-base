const path = require('path');
const util = require('../util/copy');

function init(cmdPath, name, option) {
  console.log('test: init');

  util.copyTmpl(
    path.resolve(__dirname, `./template/test-index.html.tmpl`),
    path.resolve(cmdPath, name, './test/browser/index.html'),
    option,
  );
}

function update(cmdPath, option) {
  console.log('test: update');

  util.copyFile(
    path.resolve(__dirname, `./template/base/.nycrc`),
    path.resolve(cmdPath, './.nycrc'),
  );

  util.copyTmpl(
    path.resolve(__dirname, `./template/test-index.html.tmpl`),
    path.resolve(cmdPath, './test/browser/index.html'),
    option,
  );

  util.copyFile(
    path.resolve(__dirname, `./template/base/.babelrc`),
    path.resolve(cmdPath, './.babelrc'),
  );
}

module.exports = {
  init: init,
  update: update,
};
