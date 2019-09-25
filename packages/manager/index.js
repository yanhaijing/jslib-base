const path = require('path');
const { execSync, exec } = require('child_process');
const chalk = require('chalk');
const ora = require('ora');

function init(cmdPath, name, option) {
    console.log('@js-lib/manager: init');
    const manager = option.manager;

    if (!manager) {
		return Promise.resolve();
    }

    return new Promise(function(resolve, reject) {
        const spinner = ora();

        spinner.start(`Installing packages from npm, wait for a second...
        `);

        exec(`${manager} install`, {
            cwd: path.resolve(cmdPath, name)
        }, function(error, stdout, stderr) {
            if (error) {
                reject(`安装依赖失败: ${error}`);
                return;
            }
            spinner.succeed(`Install packages successfully!
            `);
            resolve();
        });
    })
	
}

module.exports = {
    init: init
}