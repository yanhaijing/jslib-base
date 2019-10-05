const fs = require('fs');
const path = require('path');
const ora = require('ora');
const spinner = ora();
const pkg = require('./package.json');

const config = require('@js-lib/config');
const root = require('@js-lib/root');
const eslint = require('@js-lib/eslint');
const license = require('@js-lib/license');
const package = require('@js-lib/package');
const readme = require('@js-lib/readme');
const src = require('@js-lib/src');
const demo = require('@js-lib/demo');
const rollup = require('@js-lib/rollup');
const test = require('@js-lib/test');
const manager = require('@js-lib/manager');

function init(cmdPath, option) {
    option.version = pkg.version;
    
    config.init(cmdPath, option.pathname, option);
    root.init(cmdPath, option.pathname, option);
    package.init(cmdPath, option.pathname, option);
    license.init(cmdPath, option.pathname, option);
    readme.init(cmdPath, option.pathname, option);
    demo.init(cmdPath, option.pathname, option);
    src.init(cmdPath, option.pathname, option);
    eslint.init(cmdPath, option.pathname, option);
    rollup.init(cmdPath, option.pathname, option);
    test.init(cmdPath, option.pathname, option);
    manager.init(cmdPath, option.pathname, option).then(function() {
        spinner.succeed('Create project successfully');
    });
}
function update(cmdPath, option, answers) {
    option.version = pkg.version;
    
    if (answers.root) {
        root.update(cmdPath, option);
    }
    if (answers.package) {
        package.update(cmdPath, option);
    }
    if (answers.src) {
        src.update(cmdPath, option);
    }
    if (answers.eslint) {
        eslint.update(cmdPath, option);
    }
    if (answers.rollup) {
        rollup.update(cmdPath, option);
    }
    if (answers.test) {
        test.update(cmdPath, option);
    }
}

exports.init = init;
exports.update = update;