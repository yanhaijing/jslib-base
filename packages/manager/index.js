const path = require('path');
const { projectInstall } = require('pkg-install');

async function init(cmdPath, name, option) {
    console.log('@js-lib/manager: init');
    const manager = option.manager;

    if (manager === 'none') {
		return Promise.resolve();
    }

    return projectInstall(
	    {
	    	prefer: manager,
	    	cwd: path.resolve(cmdPath, name),
	    }
	)
}

module.exports = {
    init: init
}