const fs = require('fs');
const path = require('path');

const root = require('@js-lib/root');
const eslint = require('@js-lib/eslint');
const license = require('@js-lib/license');
const package = require('@js-lib/package');
const readme = require('@js-lib/readme');
const src = require('@js-lib/src');
const demo = require('@js-lib/demo');
const rollup = require('@js-lib/rollup');
const compiler = require('@js-lib/compiler');

function init(cmdPath, option) {
    root.init(cmdPath, option.pathname, option);
    eslint.init(cmdPath, option.pathname, option);
    license.init(cmdPath, option.pathname, option);
    package.init(cmdPath, option.pathname, option);
    readme.init(cmdPath, option.pathname, option);
    src.init(cmdPath, option.pathname, option);
    demo.init(cmdPath, option.pathname, option);
    rollup.init(cmdPath, option.pathname, option);
    compiler.init(cmdPath, option.pathname, option);
}
function update(cmdPath, option) {
    todo.update(cmdPath, option.pathname, option);
}

exports.init = init;
exports.update = update;