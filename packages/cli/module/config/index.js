const path = require('path');
const util = require('../../util/copy');

function init(cmdPath, name, option) {
  console.log('config: init');

  util.copyTmpl(
    path.resolve(__dirname, `./template/jslib.json.tmpl`),
    path.resolve(cmdPath, name, 'jslib.json'),
    option,
  );
}

function update() {
  console.log('config: update');
}

module.exports = {
  init: init,
  update: update,
};
