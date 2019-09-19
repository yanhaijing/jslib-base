#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const yargs = require('yargs');
const { runUpdatePrompts, runInitPrompts } = require('./run-prompts');
const { checkProjectExists } = require('./helpers');

const { log } = require('@js-lib/util');
const config = require('@js-lib/config');

const cli = require('../index.js');

log()

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
        }).option('config', {
            alias: 'c',
            describe: '仅初始化配置文件',
        })
    }, function (argv) {
        runInitPrompts(argv._[1]).then(function(answers) {
            init(argv, answers);
        });
    })
    .command(['update', 'u'], '更新一个项目', function (yargs) {
        if (!checkProjectExists(process.cwd(), 'jslib.json')) {
            console.error('error: 这不是一个jslib库，缺少jslib.json文件');
            return;
        }

        const json = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'jslib.json'), { encoding: 'utf8' }));
        
        runUpdatePrompts().then(function(answers) {
            update(json, answers);
        });
    })
    .demandCommand()
    .epilog('copyright 2018-2019')
    .argv;

function init(argv, answers) {
    const cmdPath = process.cwd();
    const {name, npmname, username, type, lang} = answers;
    const pathname = String(typeof argv._[1] !== 'undefined' ? argv._[1] : name);

    const option = {
        pathname, // 创建的名字
        name: String(name), // 项目名字 readme 
        npmname: String(npmname), // 发布到npm的名字，有可能和项目名字不一样，比如带scope
        umdname: String(npmname).split('/').pop(), // @yan/xxx -> xxx
        username: String(username),
        type,
        lang,
    };

    // 运行命令
    if (!pathname) {
        console.error('error: jslib create need name');
        return;
    }
    
    if (checkProjectExists(cmdPath, pathname) && !argv.force) {
        console.error('error: The project is already existed! If you really want to override it, use --force argv to bootstrap!');
        return;
    }

    config.init(cmdPath, '', option);
    // 仅初始化配置文件
    if (argv.config) {
        return;
    }

    cli.init(cmdPath, option);
}
function update(option, answers) {
    const cmdPath = process.cwd();

    console.log(answers);
    // cli.update(cmdPath, option);
}