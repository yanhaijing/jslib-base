const path = require('path');
const util = require('@js-lib/util');

function init(cmdPath, name, option) {
    console.log('@js-lib/config: init');

    util.copyTmpl(
        path.resolve(__dirname, `./template/jslib.json.tmpl`),
        path.resolve(cmdPath, name, 'jslib.json'),
        option,
    );
}

function update() {
    console.log('@js-lib/config: update');
}

module.exports = {
    init: init,
    update: update,
}