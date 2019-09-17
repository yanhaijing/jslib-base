const path = require('path');
const util = require('@js-lib/util');

function init(cmdPath, name, option) {
    console.log('@js-lib/rollup: init');
    const type = option.type;

    util.copyTmpl(
        path.resolve(__dirname, `./template/${type}/rollup.js.tmpl`),
        path.resolve(cmdPath, name, 'config/rollup.js'),
        option,
    );
    util.copyFile(
        path.resolve(__dirname, `./template/${type}/rollup.config.js`),
        path.resolve(cmdPath, name, 'config/rollup.config.js')
    );
    util.copyFile(
        path.resolve(__dirname, `./template/${type}/rollup.config.esm.js`),
        path.resolve(cmdPath, name, 'config/rollup.config.esm.js')
    );
    util.copyFile(
        path.resolve(__dirname, `./template/${type}/rollup.config.aio.js`),
        path.resolve(cmdPath, name, 'config/rollup.config.aio.js')
    );
    util.mergeJSON2JSON(
        path.resolve(__dirname, `./template/${type}/package.json`),
        path.resolve(cmdPath, name, 'package.json')
    );

    if (type === 'js') {
        util.copyFile(
            path.resolve(__dirname, `./template/js/.babelrc`),
            path.resolve(cmdPath, name, '.babelrc')
        );
    } else if (type === 'ts') {
        util.copyFile(
            path.resolve(__dirname, `./template/ts/tsconfig.json`),
            path.resolve(cmdPath, name, 'tsconfig.json')
        );
    }
}

function update() {
    console.log('@js-lib/rollup: update');
}

module.exports = {
    init: init,
    update: update,
}