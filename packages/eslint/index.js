const path = require('path');
const util = require('@js-lib/util');

function init(cmdPath, name, option) {
    console.log('@js-lib/eslint: init');
    const type = option.type;
    util.copyFile(path.resolve(__dirname, `./template/.eslintrc.${type}.js`), path.resolve(cmdPath, name, '.eslintrc.js'));
}

function update() {
    console.log('@js-lib/eslint: update');
}

module.exports = {
    init: init,
    update: update,
}