const ora = require('ora');
const spinner = ora();
const config = require('./config');
const root = require('./root');
const lint = require('./lint');
const packagejson = require('./package');
const demo = require('./demo');
const build = require('./build');
const test = require('./test');
const manager = require('./manager');

function init(cmdPath, option) {
  root.init(cmdPath, option.pathname, option);
  config.init(cmdPath, option.pathname, option);
  packagejson.init(cmdPath, option.pathname, option);
  demo.init(cmdPath, option.pathname, option);
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

function update(cmdPath, option) {
  root.update(cmdPath, option);
  packagejson.update(cmdPath, option);
  lint.update(cmdPath, option);
  build.update(cmdPath, option);
  test.update(cmdPath, option);
}

exports.init = init;
exports.update = update;
