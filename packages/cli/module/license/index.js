const path = require('path');
const util = require('../../util/copy');

function init(cmdPath, name, option) {
  console.log('license: init');

  util.copyTmpl(
    path.resolve(__dirname, `./template/license.tmpl`),
    path.resolve(cmdPath, name, 'LICENSE'),
    option
  );
}

function update() {
  console.log('license: update');
}

module.exports = {
  init: init,
  update: update,
};
