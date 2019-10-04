const cli = require('../index.js');

function update(option, answers) {
    const cmdPath = process.cwd();

    cli.update(cmdPath, option, answers);
}

exports.update = update;
