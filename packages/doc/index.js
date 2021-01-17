const path = require('path');
const util = require('@js-lib/util');

function init(cmdPath, name, option) {
    console.log('@js-lib/doc: init');
    const type = option.type;
    if (type === 'ts') {
        util.copyFile(
            path.resolve(__dirname, `./template/jsdoc2md.json`),
            path.resolve(cmdPath, name, 'jsdoc2md.json')
        );
    }
    util.mergeJSON2JSON(
        path.resolve(__dirname, `./template/package.${type}.json`),
        path.resolve(cmdPath, name, './package.json')
    );
}

function update(cmdPath, option) {
    console.log('@js-lib/doc: update');
    const type = option.type;
    if (type === 'ts') {
        util.copyFile(
            path.resolve(__dirname, `./template/jsdoc2md.json`),
            path.resolve(cmdPath, 'jsdoc2md.json')
        );
    }
    util.mergeJSON2JSON(
        path.resolve(__dirname, `./template/package.${type}.json`),
        path.resolve(cmdPath, './package.json')
    );
}

module.exports = {
    init: init,
    update: update,
}