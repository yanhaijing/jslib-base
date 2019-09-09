const path = require('path');
const util = require('@js-lib/util');

function init(cmdPath, name, option) {
    util.copyFile(path.resolve(__dirname, './template/TODO.md'), path.resolve(cmdPath, name, 'TODO.md'));
}

function update() {
    console.log('@js-lib/todo: update')
}

module.exports = {
    init: init,
    update: update,
}