const path = require('path');
const util = require('@js-lib/util');

function init(cmdPath, name) {
    console.log('@js-lib/doc: init');

    util.mergeJSON2JSON(
        path.resolve(__dirname, `./template/package.json`),
        path.resolve(cmdPath, name, './package.json')
    );
}

function update(cmdPath) {
    console.log('@js-lib/doc: update');

    util.mergeJSON2JSON(
        path.resolve(__dirname, `./template/package.json`),
        path.resolve(cmdPath, './package.json')
    );
}

module.exports = {
    init: init,
    update: update,
}