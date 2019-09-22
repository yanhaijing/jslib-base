const path = require('path');
const util = require('@js-lib/util');

function init(cmdPath, name, option) {
    console.log('@js-lib/license: init');

    util.copyTmpl(
        path.resolve(__dirname, `./template/license.tmpl`),
        path.resolve(cmdPath, name, 'LICENSE'),
        option,
    );
}

function update() {
    console.log('@js-lib/license: update');
}

module.exports = {
    init: init,
    update: update,
}