const path = require('path');
const { copyDir, copyFile, copyTmpl } = require('../../util/copy');
const log = require('../../util/log');

log.init();

function init(cmdPath, name, option) {
  console.log('root: init');
  const { lang, type } = option;

  copyDir(
    path.resolve(__dirname, `./template/base`),
    path.resolve(cmdPath, name),
  );
  copyFile(
    path.resolve(__dirname, `./template/ISSUE_TEMPLATE.${lang}.md`),
    path.resolve(cmdPath, name, './.github/ISSUE_TEMPLATE.md'),
  );
  copyFile(
    path.resolve(__dirname, `./template/TODO.${lang}.md`),
    path.resolve(cmdPath, name, './TODO.md'),
  );
  copyFile(
    path.resolve(__dirname, `./template/CHANGELOG.${lang}.md`),
    path.resolve(cmdPath, name, './CHANGELOG.md'),
  );
  copyFile(
    path.resolve(__dirname, `./template/doc.${lang}.md`),
    path.resolve(cmdPath, name, './doc/api.md'),
  );
  copyTmpl(
    path.resolve(__dirname, `./template/license.tmpl`),
    path.resolve(cmdPath, name, './LICENSE'),
  );
  copyTmpl(
    path.resolve(__dirname, `./template/README.${lang}.md.tmpl`),
    path.resolve(cmdPath, name, './README.md'),
    option,
  );
  copyTmpl(
    path.resolve(__dirname, `./template/.gitignore-${type}`),
    path.resolve(cmdPath, name, './.gitignore'),
    option,
  );
}

function update(cmdPath, option) {
  console.log('root: update');
  const { type } = option;
  copyFile(
    path.resolve(__dirname, `./template/base/.editorconfig`),
    path.resolve(cmdPath, '.editorconfig'),
  );

  copyFile(
    path.resolve(__dirname, `./template/base/.vscode/extensions.json`),
    path.resolve(cmdPath, '.vscode/extensions.json'),
  );

  copyFile(
    path.resolve(__dirname, `./template/base/.vscode/settings.json`),
    path.resolve(cmdPath, '.vscode/settings.json'),
  );

  copyFile(
    path.resolve(__dirname, `./template/base/.github/FUNDING.yml`),
    path.resolve(cmdPath, '.github/FUNDING.yml'),
  );

  copyFile(
    path.resolve(__dirname, `./template/base/.github/workflows/ci.yml`),
    path.resolve(cmdPath, '.github/workflows/ci.yml'),
  );

  copyFile(
    path.resolve(__dirname, `./template/.gitignore-${type}`),
    path.resolve(cmdPath, '.gitignore'),
  );
}

module.exports = {
  init: init,
  update: update,
};
