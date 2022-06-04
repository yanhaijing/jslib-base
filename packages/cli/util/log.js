const chalk = require('chalk');

const error = console.error;
const log = console.error;
const info = console.info;
const warn = console.warn;

function init() {
  console.success = function (...args) {
    log(chalk.bold.green(...args));
  };
  console.error = function (...args) {
    error(chalk.bold.red(...args));
  };
  console.warn = function (...args) {
    warn(chalk.hex('#FFA500')(...args));
  };
  console.info = function (...args) {
    info(chalk.bold.blue(...args));
  };
}

exports.init = init;
