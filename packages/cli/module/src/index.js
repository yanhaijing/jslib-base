const path = require('path');
const util = require('../../util/copy');

function init(cmdPath, name, option) {
  console.log('src: init');
  const type = option.type;
  util.copyDir(
    path.resolve(__dirname, `./template/${type}`),
    path.resolve(cmdPath, name),
  );
}

function update() {
  console.log('src: update');
}

module.exports = {
  init: init,
  update: update,
};
