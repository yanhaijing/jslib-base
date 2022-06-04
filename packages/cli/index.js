const ora = require('ora');
const spinner = ora();
const pkg = require('./package.json');

const config = require('./module/config');
const root = require('./module/root');
const eslint = require('./module/eslint');
const license = require('./module/license');
const packagejson = require('./module/package');
const readme = require('./module/readme');
const src = require('./module/src');
const demo = require('./module/demo');
const rollup = require('./module/rollup');
const test = require('./module/test');
const manager = require('./module/manager');

function init(cmdPath, option) {
  console.log('yan123');
  option.version = pkg.version;

  config.init(cmdPath, option.pathname, option);
  root.init(cmdPath, option.pathname, option);
  packagejson.init(cmdPath, option.pathname, option);
  license.init(cmdPath, option.pathname, option);
  readme.init(cmdPath, option.pathname, option);
  demo.init(cmdPath, option.pathname, option);
  src.init(cmdPath, option.pathname, option);
  eslint.init(cmdPath, option.pathname, option);
  rollup.init(cmdPath, option.pathname, option);
  test.init(cmdPath, option.pathname, option);
  manager.init(cmdPath, option.pathname, option).then(function () {
    spinner.succeed('Create project successfully');
  });
}
function update(cmdPath, option, answers) {
  option.version = pkg.version;

  if (answers.root) {
    root.update(cmdPath, option);
  }
  if (answers.package) {
    packagejson.update(cmdPath, option);
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
