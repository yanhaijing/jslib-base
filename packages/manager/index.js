const path = require('path');
const { execSync } = require('child_process');
const ora = require('ora');
const spinner = ora('Loading unicorns');

function init(cmdPath, name, option) {
    console.log('@js-lib/manager: init');
    const manager = option.manager;

    if (!manager) {
		return
    }

    spinner.start('Installing packages from npm, wait for a second...');

	execSync(`${manager} install`, {
		cwd: path.resolve(cmdPath, name)
	});

	spinner.succeed('Install packages successfully!')
}

module.exports = {
    init: init
}