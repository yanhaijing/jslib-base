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

function runPrompts(cmd, argv) {
    return prompts()
};

exports.runPrompts = runPrompts;