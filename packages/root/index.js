const path = require('path');
const util = require('@js-lib/util');
// util.log()

function init(cmdPath, name, option) {
    console.log('@js-lib/root: init');
    const lang = option.lang;
    
    util.copyDir(path.resolve(__dirname, `./template/base`), path.resolve(cmdPath, name));
    util.copyFile(
        path.resolve(__dirname, `./template/ISSUE_TEMPLATE.${lang}.md`),
        path.resolve(cmdPath, name, './.github/ISSUE_TEMPLATE.md')
    );
    util.copyFile(
        path.resolve(__dirname, `./template/TODO.${lang}.md`),
        path.resolve(cmdPath, name, './TODO.md')
    );
    util.copyFile(
        path.resolve(__dirname, `./template/CHANGELOG.${lang}.md`),
        path.resolve(cmdPath, name, './CHANGELOG.md')
    );
    util.copyFile(
        path.resolve(__dirname, `./template/doc.${lang}.md`),
        path.resolve(cmdPath, name, './doc/api.md')
    );
}

function update() {
    console.log('@js-lib/root: update');
}

module.exports = {
    init: init,
    update: update,
}