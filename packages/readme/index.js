const path = require('path');
const util = require('@js-lib/util');

function init(cmdPath, name, option) {
    console.log('@js-lib/readme: init');
    const lang = option.lang;
    util.copyTmpl(
        path.resolve(__dirname, `./template/README.${lang}.md.tmpl`),
        path.resolve(cmdPath, name, 'README.md'),
        option,
    );
}

function update() {
    console.log('@js-lib/readme: update');
}

module.exports = {
    init: init,
    update: update,
}