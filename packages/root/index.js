const path = require('path');
const util = require('@js-lib/util');

function init(cmdPath, name, option) {
    util.log('@js-lib/root: init');
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
    util.copyTmpl(
        path.resolve(__dirname, `./template/jslib.json.tmpl`),
        path.resolve(cmdPath, name, 'jslib.json'),
        option,
    );
}

function update() {
    util.log('@js-lib/root: update');
}

module.exports = {
    init: init,
    update: update,
}