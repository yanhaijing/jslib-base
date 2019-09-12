#!/usr/bin/env node
const yargs = require('yargs');
const {runPrompts} = require('./run-prompts');
const {checkProjectExists} = require('./helpers')

const cli = require('../index.js');

yargs
    .usage('usage: jslib [options]')
    .usage('usage: jslib <command> [options]')
    .example('jslib new myproject', '新建一个项目 myproject')
    .alias("h", "help")
    .alias("v", "version")
    .command(['new', 'n'], '新建一个项目', function (yargs) {
        runPrompts().then(function(answers) {
            run('init', answers, yargs.argv)
        });
    })
    .command(['update', 'u'], '更新一个项目', function (yargs) {
        runPrompts().then(function(answers) {
            run('update', answers, yargs.argv)
        });
    })
    .demandCommand()
    .epilog('copyright 2018-2019')
    .argv;


function run(cmd, answers, argv) {
    const cmdPath = process.cwd();
    const {name, type, lang} = answers;

    // 运行命令
    if (cmd === 'init') {
        if (!name) {
            console.error('error: jslib create need name');
            return;
        }

        if (checkProjectExists(cmdPath, name) && !argv.force) {
            throw new Error(`
                The project is already existed! 
                If you really want to override it, use --force argv to bootstrap!
            `);
        }

        cli.init(cmdPath, String(name), {
            type: type,
            lang: lang,
        });
    } 
    else if (cmd === 'update') {
        cli.update(cmdPath, {
            type: type,
            lang: lang,
        });
    }
}