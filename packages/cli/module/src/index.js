const path = require('path');
const util = require('../../util/copy');

function init(cmdPath, name, option) {
  console.log('src: init');
  const type = option.type;
  util.copyDir(
    path.resolve(__dirname, `./template/${type}`),
    path.resolve(cmdPath, name, 'src')
  );
}

function update(cmdPath, option) {
  console.log('src: update');
  const type = option.type;
  util.copyDir(
    path.resolve(__dirname, `./template/${type}`),
    path.resolve(cmdPath, 'src')
  );
}

module.exports = {
  init: init,
  update: update,
};
