const path = require('path');
const util = require('../util/copy');

function init(cmdPath, name, option) {
  console.log('demo: init');

  util.copyTmpl(
    path.resolve(__dirname, `./template/demo-global.html.tmpl`),
    path.resolve(cmdPath, name, 'demo/demo-global.html'),
    option,
  );
}

function update(_cmdPath, _option) {
  console.log('demo: update');
}

module.exports = {
  init: init,
  update: update,
};
