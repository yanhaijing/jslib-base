const config = require('@js-lib/config');
const cli = require('../index.js');
const pkg = require('../package.json');
const { checkProjectExists } = require('./helpers');

function init(argv, answers) {
    const cmdPath = process.cwd();
    const {
        name, npmname, umdname, username, type, module, test, lang, manager
    } = Object.assign({}, argv, answers);
    const pathname = String(typeof argv._[1] !== 'undefined' ? argv._[1] : name);

    const option = {
        pathname, // 创建的名字
        name: String(name), // 项目名字 readme 
        npmname: String(npmname), // 发布到npm的名字，有可能和项目名字不一样，比如带scope
        umdname: String(umdname),
        username: String(username),
        type,
        module: Array.isArray(module) ? module : module.split(','), // 数组或字符串
        test,
        lang,
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
        config.init(cmdPath, '', option);
        return;
    }

    if (checkProjectExists(cmdPath, pathname) && !argv.force) {
        console.error('error: The project is already existed! If you really want to override it, use --force argv to bootstrap!');
        return;
    }

    cli.init(cmdPath, option);
}

exports.init = init;
