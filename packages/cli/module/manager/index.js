const path = require('path');
const { exec } = require('child_process');
const ora = require('ora');

function init(cmdPath, name, option) {
  console.log('manager: init');
  const manager = option.manager;

  if (!manager) {
    return Promise.resolve();
  }

  return new Promise(function (resolve, reject) {
    const spinner = ora();

    spinner.start(`Installing packages from npm, wait for a second...
        `);

    exec(
      `${manager} install`,
      {
        cwd: path.resolve(cmdPath, name),
      },
      function (error, _stdout, _stderr) {
        if (error) {
          reject(`安装依赖失败: ${error}`);
          return;
        }
        spinner.succeed(`Install packages successfully!
            `);
        resolve();
      }
    );
  });
}

module.exports = {
  init: init,
};
