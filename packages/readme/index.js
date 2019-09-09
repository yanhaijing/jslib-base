const path = require('path');
const util = require('@js-lib/util');

function init(cmdPath, name, option) {
    console.log('@js-lib/readme: init');
    const lang = option.lang;
    util.copyFile(path.resolve(__dirname, `./template/README.${lang}.md`), path.resolve(cmdPath, name, 'README.md'));
}

function update() {
    console.log('@js-lib/readme: update');
}

module.exports = {
    init: init,
    update: update,
}