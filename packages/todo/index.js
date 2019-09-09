const path = require('path');
const util = require('@js-lib/util');

function init() {
    console.log('@js-lib/todo: init', path.resolve(__dirname, './template/TODO.md'));

    // util.copyFile(path.resolve(__dirname, './template/TODO.md'), '/Users/yan/github/test/TODO.md');
}

function update() {
    console.log('@js-lib/todo: update')
}

module.exports = {
    init: init,
    update: update,
}