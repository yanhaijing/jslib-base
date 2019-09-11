const fs = require('fs');
const path = require('path');

const root = require('@js-lib/root');
const changelog = require('@js-lib/changelog');
const doc = require('@js-lib/doc');
const eslint = require('@js-lib/eslint');
const license = require('@js-lib/license');
const package = require('@js-lib/package');
const readme = require('@js-lib/readme');
const todo = require('@js-lib/todo');
const src = require('@js-lib/src');

function init(cmdPath, name, option) {
    root.init(cmdPath, name, option)
    changelog.init(cmdPath, name, option)
    doc.init(cmdPath, name, option)
    eslint.init(cmdPath, name, option)
    license.init(cmdPath, name, option)
    package.init(cmdPath, name, option)
    readme.init(cmdPath, name, option)
    todo.init(cmdPath, name, option)
    src.init(cmdPath, name, option)
}
function update(cmdPath, option) {
    todo.update(cmdPath, option)
}

exports.init = init;
exports.update = update;