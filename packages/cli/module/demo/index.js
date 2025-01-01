const path = require('path');
const util = require('../../util/copy');

function init(cmdPath, name, option) {
  console.log('demo: init');
  const _lang = option.lang;
  util.copyFile(
    path.resolve(__dirname, `./template/require.js`),
    path.resolve(cmdPath, name, 'demo/js/require.js'),
  );
  util.copyFile(
    path.resolve(__dirname, `./template/demo-amd.html`),
    path.resolve(cmdPath, name, 'demo/demo-amd.html'),
  );
  util.copyFile(
    path.resolve(__dirname, `./template/demo-node.js`),
    path.resolve(cmdPath, name, 'demo/demo-node.js'),
  );
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
