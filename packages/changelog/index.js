const path = require('path');
const util = require('@js-lib/util');

function init(cmdPath, name, option) {
    console.log('@js-lib/changelog: init');
    const lang = option.lang;
    util.copyFile(path.resolve(__dirname, `./template/CHANGELOG.${lang}.md`), path.resolve(cmdPath, name, 'CHANGELOG.md'));
}

function update() {
    console.log('@js-lib/changelog: update');
}

module.exports = {
    init: init,
    update: update,
}