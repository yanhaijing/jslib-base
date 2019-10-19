#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yargs = require('yargs');

const { log } = require('@js-lib/util');

const { runUpdatePrompts, runInitPrompts } = require('./run-prompts');
const { checkProjectExists } = require('./helpers');
const { init } = require('./init');
const { update } = require('./update');

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
        }).option('npmname', {
            alias: 'n',
            describe: '仅初始化 npm 项目名称',
        }).option('umdname', {
            alias: 'umd',
            describe: '仅初始化打包时umd name',
        }).option('username', {
            alias: 'u',
            describe: '仅初始化用户名称',
        }).option('type', {
            alias: 't',
            describe: '仅初始化 js/ts 选择',
        }).option('module', {
            describe: '模块化方案',
        }).option('test', {
            describe: '测试方案',
        }).option('lang', {
            alias: 'l',
            describe: '仅初始化中英文选择',
        }).option('manager', {
            alias: 'm',
            describe: '选择仓库包管理方式',
        })
    }, function (argv) {
        runInitPrompts(argv._[1], yargs.argv).then(function(answers) {
            init(argv, answers);
        });
    })
    .command(['update', 'u'], '更新一个项目', function (yargs) {
        if (!checkProjectExists(process.cwd(), 'jslib.json')) {
            console.error('error: 这不是一个jslib库，缺少jslib.json文件');
            return;
        }

        const json = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'jslib.json'), { encoding: 'utf8' }));

        json.module = typeof json.module === 'string' ? json.module.split(',') : ['umd','esm','commonjs'];
        json.test = json.test ? json.test : 'mocha';
        
        runUpdatePrompts().then(function(answers) {
            update(json, answers);
        });
    })
    .demandCommand()
    .epilog('copyright 2018-2019')
    .argv;



