const ora = require('ora');
const spinner = ora();
const config = require('./module/config');
const root = require('./module/root');
const lint = require('./module/lint');
const packagejson = require('./module/package');
const src = require('./module/src');
const demo = require('./module/demo');
const build = require('./module/build');
const test = require('./module/test');
const manager = require('./module/manager');

function init(cmdPath, option) {
  config.init(cmdPath, option.pathname, option);
  root.init(cmdPath, option.pathname, option);
  packagejson.init(cmdPath, option.pathname, option);
  demo.init(cmdPath, option.pathname, option);
  src.init(cmdPath, option.pathname, option);
  lint.init(cmdPath, option.pathname, option);
  build.init(cmdPath, option.pathname, option);
  test.init(cmdPath, option.pathname, option);
  manager.init(cmdPath, option.pathname, option).then(
    () => {
      spinner.succeed('Create lib successfully');
    },
    () => {
      spinner.fail('Create lib failure');
    },
  );
}

function update(cmdPath, option, answers) {
  if (answers.root) {
    root.update(cmdPath, option);
  }
  if (answers.package) {
    packagejson.update(cmdPath, option);
  }
  if (answers.lint) {
    lint.update(cmdPath, option);
  }
  if (answers.build) {
    build.update(cmdPath, option);
  }
  if (answers.test) {
    test.update(cmdPath, option);
  }
}

exports.init = init;
exports.update = update;
