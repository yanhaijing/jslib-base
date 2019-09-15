const path = require('path');
const util = require('@js-lib/util');

function init(cmdPath, name, option) {
    console.log('@js-lib/package: init');
    const lang = option.lang;
    util.copyTmpl(
        path.resolve(__dirname, `./template/package.json.tmpl`),
        path.resolve(cmdPath, name, 'package.json'),
        option,
    );
}

function update() {
    console.log('@js-lib/package: update');
}

module.exports = {
    init: init,
    update: update,
}