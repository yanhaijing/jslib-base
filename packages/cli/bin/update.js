const cli = require('../index.js');
const pkg = require('../package.json');

function update(option, answers) {
  const cmdPath = process.cwd();
  option.version = pkg.version;
  cli.update(cmdPath, option, answers);
}

exports.update = update;
