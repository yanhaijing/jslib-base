#!/usr/bin/env node
const path = require('path');
const yargs = require('yargs');
const inquirer = require('inquirer');

const promptList = [
    {
        type: 'input',
        message: '项目名称:',
        name: 'name',
        default: "project" // 默认值
    },
    {
        type: 'list',
        message: '使用 TypeScript/JavaScript:',
        name: 'type',
        choices: [
            'TypeScript',
            'JavaScript',
        ],
        filter: function (value) {
            return ({
                TypeScript: 'ts',
                JavaScript: 'js'
            }[value])
        }
    },
    {
        type: 'list',
        message: '项目语言:',
        name: 'lang',
        choices: [
            'English',
            'Chinese',
        ],
        filter: function (value) {
            return ({
                English: 'en',
                Chinese: 'zh'
            }[value])
        }
    }
];

function prompts() {
    return new Promise(function(resolve) {
        return inquirer
          .prompt(promptList)
          .then(answers => {
            resolve(answers)
          });
    })
};

function runPrompts(cmd) {
    prompts().then(function(answers) {
        run(cmd, answers)
    })
};


const cli = require('../index.js');

yargs
    .usage('usage: jslib [options]')
    .usage('usage: jslib <command> [options]')
    .example('jslib new myproject', '新建一个项目 myproject')
    .alias("h", "help")
    .alias("v", "version")
    .command(['new', 'n'], '新建一个项目', function (yargs) {
        runPrompts('init')
    })
    .command(['update', 'u'], '更新一个项目', function (yargs) {
        runPrompts('update')
    })
    .demandCommand()
    .epilog('copyright 2018-2019')
    .argv;


function run(cmd, answers) {
    const cmdPath = process.cwd();

    // 运行命令
    if (cmd === 'init') {
        if (!answers.name) {
            console.error('error: jslib create need name');
            return;
        }
        cli.init(cmdPath, String(answers.name), {
            type: answers.type,
            lang: answers.lang,
        });
    } else if (cmd === 'update') {
        cli.update(cmdPath, {
            type: answers.type,
            lang: answers.lang,
        });
    }
}