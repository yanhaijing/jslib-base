const path = require('path');
const util = require('@js-lib/util');

function init(cmdPath, name, option) {
    console.log('@js-lib/rollup: init');
    const type = option.type;

    const module = option.module = option.module.reduce((prev, name) => (prev[name] = name, prev), ({}));

    util.copyTmpl(
        path.resolve(__dirname, `./template/${type}/rollup.js.tmpl`),
        path.resolve(cmdPath, name, 'config/rollup.js'),
        option,
    );

    if (module.umd) {
        util.copyFile(
            path.resolve(__dirname, `./template/${type}/rollup.config.aio.js`),
            path.resolve(cmdPath, name, 'config/rollup.config.aio.js')
        );
    }
    if (module.esm) {
        util.copyFile(
            path.resolve(__dirname, `./template/${type}/rollup.config.esm.js`),
            path.resolve(cmdPath, name, 'config/rollup.config.esm.js')
        );
    }
    if (module.commonjs) {
        util.copyFile(
            path.resolve(__dirname, `./template/${type}/rollup.config.js`),
            path.resolve(cmdPath, name, 'config/rollup.config.js')
        );
    }
    
    util.mergeTmpl2JSON(
        path.resolve(__dirname, `./template/${type}/package.json.tmpl`),
        path.resolve(cmdPath, name, 'package.json'),
        option,
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

function update(cmdPath, option) {
    console.log('@js-lib/rollup: update');

    const type = option.type;
    const module = option.module = option.module.reduce((prev, name) => (prev[name] = name, prev), ({}));
    
    util.copyTmpl(
        path.resolve(__dirname, `./template/${type}/rollup.js.tmpl`),
        path.resolve(cmdPath, 'config/rollup.js'),
        option,
    );
    
    if (module.umd) {
        util.copyFile(
            path.resolve(__dirname, `./template/${type}/rollup.config.aio.js`),
            path.resolve(cmdPath, 'config/rollup.config.aio.js')
        );
    }

    if (module.esm) {
        util.copyFile(
            path.resolve(__dirname, `./template/${type}/rollup.config.esm.js`),
            path.resolve(cmdPath, 'config/rollup.config.esm.js')
        );
    }

    if (module.commonjs) {
        util.copyFile(
            path.resolve(__dirname, `./template/${type}/rollup.config.js`),
            path.resolve(cmdPath, 'config/rollup.config.js')
        );
    }

    util.mergeTmpl2JSON(
        path.resolve(__dirname, `./template/${type}/package.json.tmpl`),
        path.resolve(cmdPath, 'package.json'),
        option,
    );

    if (type === 'js') {
        util.copyFile(
            path.resolve(__dirname, `./template/js/.babelrc`),
            path.resolve(cmdPath, '.babelrc')
        );
    } else if (type === 'ts') {
        util.copyFile(
            path.resolve(__dirname, `./template/ts/tsconfig.json`),
            path.resolve(cmdPath, 'tsconfig.json')
        );
    }
}

module.exports = {
    init: init,
    update: update,
}