const path = require('path');
const util = require('../../util/copy');

function init(cmdPath, name, option) {
  console.log('test: init');
  const type = option.type;

  util.copyFile(
    path.resolve(__dirname, `./template/${type}/.nycrc`),
    path.resolve(cmdPath, name, './.nycrc'),
  );
  util.copyTmpl(
    path.resolve(__dirname, `./template/${type}/index.html.tmpl`),
    path.resolve(cmdPath, name, './test/browser/index.html'),
    option,
  );
  util.copyFile(
    path.resolve(__dirname, `./template/${type}/test.js`),
    path.resolve(cmdPath, name, './test/test.js'),
  );
  util.mergeJSON2JSON(
    path.resolve(__dirname, `./template/${type}/package.json`),
    path.resolve(cmdPath, name, './package.json'),
  );

  if (type === 'js') {
    util.copyFile(
      path.resolve(__dirname, `./template/${type}/.babelrc`),
      path.resolve(cmdPath, name, './.babelrc'),
    );
  }
}

function update(cmdPath, option) {
  console.log('test: update');

  const type = option.type;

  util.copyFile(
    path.resolve(__dirname, `./template/${type}/.nycrc`),
    path.resolve(cmdPath, './.nycrc'),
  );
  util.copyTmpl(
    path.resolve(__dirname, `./template/${type}/index.html.tmpl`),
    path.resolve(cmdPath, './test/browser/index.html'),
    option,
  );
  util.mergeJSON2JSON(
    path.resolve(__dirname, `./template/${type}/package.json`),
    path.resolve(cmdPath, './package.json'),
  );

  if (type === 'js') {
    util.copyFile(
      path.resolve(__dirname, `./template/${type}/.babelrc`),
      path.resolve(cmdPath, './.babelrc'),
    );
  }
}

module.exports = {
  init: init,
  update: update,
};
