const path = require('path');
const {log, copyDir, copyFile, } = require('@js-lib/util');

log()

function init(cmdPath, name, option) {
    console.log('@js-lib/root: init');
    const lang = option.lang;
    
    copyDir(path.resolve(__dirname, `./template/base`), path.resolve(cmdPath, name));
    copyFile(
        path.resolve(__dirname, `./template/ISSUE_TEMPLATE.${lang}.md`),
        path.resolve(cmdPath, name, './.github/ISSUE_TEMPLATE.md')
    );
    copyFile(
        path.resolve(__dirname, `./template/TODO.${lang}.md`),
        path.resolve(cmdPath, name, './TODO.md')
    );
    copyFile(
        path.resolve(__dirname, `./template/CHANGELOG.${lang}.md`),
        path.resolve(cmdPath, name, './CHANGELOG.md')
    );
    copyFile(
        path.resolve(__dirname, `./template/doc.${lang}.md`),
        path.resolve(cmdPath, name, './doc/api.md')
    );
}

function update(cmdPath, option) {
    console.log('@js-lib/root: update');
    
    copyFile(
        path.resolve(__dirname, `./template/base/.editorconfig`),
        path.resolve(cmdPath, '.editorconfig')
    );

    copyFile(
        path.resolve(__dirname, `./template/base/.gitignore`),
        path.resolve(cmdPath, '.gitignore')
    );

    copyFile(
        path.resolve(__dirname, `./template/base/.travis.yml`),
        path.resolve(cmdPath, '.travis.yml')
    );
}

module.exports = {
    init: init,
    update: update,
}