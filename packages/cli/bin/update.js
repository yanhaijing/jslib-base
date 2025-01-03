const pkg = require('../package.json');
const modulejs = require('../module-js');
const modulets = require('../module-ts');

function update(option) {
  const cmdPath = process.cwd();
  option.version = pkg.version;
  if (option.type === 'js') {
    modulejs.update(cmdPath, option);
  } else if (option.type === 'ts') {
    modulets.update(cmdPath, option);
  }
}

exports.update = update;
