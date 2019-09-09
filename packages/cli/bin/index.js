#!/usr/bin/env node
const path = require('path');
const yargs = require('yargs');

const cli = require('../index.js');

yargs
    .usage('usage: jslib [options]')
    .usage('usage: jslib <command> [options]')
    .example('jslib new myproject', '新建一个项目myproject')
    .alias("h", "help")
    .alias("v", "version")
    .command(['new', 'n'], '新建一个项目', function (yargs) {
        return yargs.option('type', {
            alias: 'T',
            default: 'js',
            describe: '请选择项目的语言[js|ts]',
            choices: ['js', 'ts'],
        }).option('lang', {
            alias: 'L',
            default: 'zh',
            describe: '请选择项目的语言[zh|en]',
            choices: ['zh', 'en'],
        })
    }, function (argv) {
        run('init', argv)
    })
    .command(['update', 'u'], '更新一个项目', function (yargs) {
        run('update', yargs.argv)
    })
    .demandCommand()
    .epilog('copyright 2018-2019')
    .argv;

function run(cmd, argv) {
    // 运行命令
    cli[cmd](argv);
}