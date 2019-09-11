const path = require('path');
const util = require('@js-lib/util');

function init(cmdPath, name, option) {
    console.log('@js-lib/rollup: init');
    const lang = option.lang;
    util.copyFile(path.resolve(__dirname, `./template/rollup.js`), path.resolve(cmdPath, name, 'config/rollup.js'));
    util.copyFile(path.resolve(__dirname, `./template/rollup.config.js`), path.resolve(cmdPath, name, 'config/rollup.config.js'));
    util.copyFile(path.resolve(__dirname, `./template/rollup.config.esm.js`), path.resolve(cmdPath, name, 'config/rollup.config.esm.js'));
    util.copyFile(path.resolve(__dirname, `./template/rollup.config.aio.js`), path.resolve(cmdPath, name, 'config/rollup.config.aio.js'));
}

function update() {
    console.log('@js-lib/rollup: update');
}

module.exports = {
    init: init,
    update: update,
}