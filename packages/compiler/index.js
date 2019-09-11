const path = require('path');
const util = require('@js-lib/util');

function init(cmdPath, name, option) {
    console.log('@js-lib/compiler: init');
    const type = option.type;
    if (type === 'js') {
        util.copyFile(path.resolve(__dirname, `./template/.babelrc`), path.resolve(cmdPath, name, '.babelrc'));
    } else {
        util.copyFile(path.resolve(__dirname, `./template/tsconfig.json`), path.resolve(cmdPath, name, 'tsconfig.json'));
    }
}

function update() {
    console.log('@js-lib/compiler: update');
}

module.exports = {
    init: init,
    update: update,
}