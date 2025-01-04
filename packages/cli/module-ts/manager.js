const path = require('path');
const { exec } = require('child_process');
const ora = require('ora');
const shell = require('shelljs');
function init(cmdPath, name, option) {
  const manager = option.manager;

  if (!manager) {
    return Promise.resolve();
  }

  if (!shell.which('git')) {
    console.error('未找到git命令，跳过install过程');
    return Promise.reject();
  }

  if (
    shell.exec('git init', {
      cwd: path.resolve(cmdPath, name),
    }).code !== 0
  ) {
    console.error('git init失败，跳过install过程');
    return Promise.reject();
  }
  return new Promise(function (resolve, reject) {
    const spinner = ora();

    spinner.start(`Installing packages from npm, wait for a second...`);

    exec(
      `${manager} install`,
      {
        cwd: path.resolve(cmdPath, name),
      },
      function (error, _stdout, _stderr) {
        if (error) {
          reject();
          return;
        }
        spinner.succeed(`Install packages successfully!`);
        resolve();
      },
    );
  });
}

module.exports = {
  init: init,
};
