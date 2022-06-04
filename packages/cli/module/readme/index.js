const path = require('path');
const util = require('../../util/copy');

function init(cmdPath, name, option) {
  console.log('readme: init');
  const lang = option.lang;
  util.copyTmpl(
    path.resolve(__dirname, `./template/README.${lang}.md.tmpl`),
    path.resolve(cmdPath, name, 'README.md'),
    option
  );
}

function update() {
  console.log('readme: update');
}

module.exports = {
  init: init,
  update: update,
};
