const configjs = require('../module-js/config');
const configts = require('../module-ts/config');
const modulejs = require('../module-js');
const modulets = require('../module-ts');
const pkg = require('../package.json');
const { checkProjectExists } = require('../util/file');

function init(argv, answers) {
  const cmdPath = process.cwd();
  const { name, npmname, umdname, username, type, manager } = Object.assign(
    {},
    argv,
    answers,
  );
  const pathname = String(typeof argv._[1] !== 'undefined' ? argv._[1] : name);

  const option = {
    pathname, // 创建的名字
    name: String(name), // 项目名字 readme
    npmname: String(npmname), // 发布到npm的名字，有可能和项目名字不一样，比如带scope
    umdname: String(umdname),
    username: String(username),
    type,
    manager,
    version: pkg.version,
  };

  // 运行命令
  if (!pathname) {
    console.error('error: jslib create need name');
    return;
  }

  // 仅初始化配置文件
  if (argv.config) {
    if (option.type === 'js') {
      configjs.init(cmdPath, '', option);
    } else if (option.type === 'ts') {
      configts.init(cmdPath, '', option);
    }
    return;
  }

  if (checkProjectExists(cmdPath, pathname) && !argv.force) {
    console.error(
      'error: The project is already existed! If you really want to override it, use --force argv to bootstrap!',
    );
    return;
  }

  if (option.type === 'js') {
    modulejs.init(cmdPath, option);
  } else if (option.type === 'ts') {
    modulets.init(cmdPath, option);
  }
}

exports.init = init;
