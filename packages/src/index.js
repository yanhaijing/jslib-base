const path = require('path');
const util = require('@js-lib/util');

function init(cmdPath, name, option) {
    console.log('@js-lib/src: init');
    const type = option.type;
    util.copyDir(path.resolve(__dirname, `./template/${type}`), path.resolve(cmdPath, name, 'src'));
}

function update() {
    console.log('@js-lib/src: update');
}

module.exports = {
    init: init,
    update: update,
}