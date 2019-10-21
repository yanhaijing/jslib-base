const path = require('path');
const util = require('@js-lib/util');

function init(cmdPath, name, option) {
    if (!option.test) {
        return;
    }
    console.log('@js-lib/test: init');
    const type = option.type;

    util.copyFile(
        path.resolve(__dirname, `./template/${type}/.nycrc`),
        path.resolve(cmdPath, name, './.nycrc')
    );
    util.copyTmpl(
        path.resolve(__dirname, `./template/${type}/index.html.tmpl`),
        path.resolve(cmdPath, name, './test/browser/index.html'),
        option,
    );
    util.copyFile(
        path.resolve(__dirname, `./template/${type}/test.js`),
        path.resolve(cmdPath, name, './test/test.js')
    );
    util.mergeJSON2JSON(
        path.resolve(__dirname, `./template/${type}/package.json`),
        path.resolve(cmdPath, name, './package.json')
    );
}

function update(cmdPath, option) {
    if (!option.test) {
        return;
    }
    console.log('@js-lib/test: update');

    const type = option.type;

    util.copyFile(
        path.resolve(__dirname, `./template/${type}/.nycrc`),
        path.resolve(cmdPath, './.nycrc')
    );
    util.copyTmpl(
        path.resolve(__dirname, `./template/${type}/index.html.tmpl`),
        path.resolve(cmdPath, './test/browser/index.html'),
        option,
    );
    util.mergeJSON2JSON(
        path.resolve(__dirname, `./template/${type}/package.json`),
        path.resolve(cmdPath, './package.json')
    );

    util.replaceFileText(
        path.resolve(cmdPath, './test/test.js'),
        [
            {
                from: '\/dist\/index\.js',
                to: type === 'js' ? '/src/index.js' : '/src/index.ts',
            },
            {
                from: type === 'js' ? '\/src\/index\.ts' : '\/src\/index\.js',
                to: type === 'js' ? '/src/index.js' : '/src/index.ts',
            },
        ]
    );
}

module.exports = {
    init: init,
    update: update,
}