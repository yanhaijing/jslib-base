const path = require('path');
const util = require('@js-lib/util');

function init(cmdPath, name, option) {
    console.log('@js-lib/root: init');
    util.copyDir(path.resolve(__dirname, `./template`), path.resolve(cmdPath, name));
}

function update() {
    console.log('@js-lib/root: update');
}

module.exports = {
    init: init,
    update: update,
}