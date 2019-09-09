const path = require('path');
const util = require('@js-lib/util');

function init(cmdPath, name, option) {
    console.log('@js-lib/doc: init');
    const lang = option.lang;
    util.copyFile(path.resolve(__dirname, `./template/api.${lang}.md`), path.resolve(cmdPath, name, 'TODO.md'));
}

function update() {
    console.log('@js-lib/doc: update');
}

module.exports = {
    init: init,
    update: update,
}