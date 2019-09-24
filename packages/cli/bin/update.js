const cli = require('../index.js');

function update(option, answers) {
    const cmdPath = process.cwd();

    option.umdname = option.npmname.split('/').pop();
    cli.update(cmdPath, option, answers);
}

exports.update = update;
