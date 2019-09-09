const path = require('path');
const util = require('@js-lib/util');

function init(cmdPath, name, option) {
    console.log('@js-lib/todo: init');
    const lang = option.lang;
    util.copyFile(path.resolve(__dirname, `./template/TODO.${lang}.md`), path.resolve(cmdPath, name, 'TODO.md'));
}

function update() {
    console.log('@js-lib/todo: update');
}

module.exports = {
    init: init,
    update: update,
}