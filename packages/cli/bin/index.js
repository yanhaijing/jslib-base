#!/usr/bin/env node
const yargs = require('yargs');
const { runPrompts, runInitPrompts } = require('./run-prompts');
const { checkProjectExists } = require('./helpers');

const cli = require('../index.js');

yargs
    .usage('usage: jslib [options]')
    .usage('usage: jslib <command> [options]')
    .example('jslib new myproject', '新建一个项目 myproject')
    .alias("h", "help")
    .alias("v", "version")
    .command(['new', 'n'], '新建一个项目', function (yargs) {
        return yargs.option('force', {
            alias: 'f',
            describe: '强制新建',
        })
    }, function (argv) {
        runInitPrompts(argv._[1]).then(function(answers) {
            run('init', argv, answers)
        });
    })
    .command(['update', 'u'], '更新一个项目', function (yargs) {
        console.log(yargs)
        // runPrompts().then(function(answers) {
        //     run('update', answers, yargs.argv)
        // });
    })
    .demandCommand()
    .epilog('copyright 2018-2019')
    .argv;


function run(cmd, argv, answers) {
    const cmdPath = process.cwd();
    const {name, npmname, type, lang} = answers;
    const pathname = String(typeof argv._[1] !== 'undefined' ? argv._[1] : name);

    // 运行命令
    if (cmd === 'init') {
        if (!pathname) {
            console.error('error: jslib create need name');
            return;
        }

        if (checkProjectExists(cmdPath, pathname) && !argv.force) {
            throw new Error(`
                The project is already existed! 
                If you really want to override it, use --force argv to bootstrap!
            `);
        }

        cli.init(cmdPath, {
            pathname, // 创建的名字
            name: String(name), // 项目名字 readme 
            npmname: String(npmname), // 发布到npm的名字，有可能和项目名字不一样，比如带scope
            type,
            lang,
        });
    } 
    else if (cmd === 'update') {
        cli.update(cmdPath, {
            type: type,
            lang: lang,
        });
    }
}