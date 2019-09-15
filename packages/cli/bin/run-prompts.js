const inquirer = require('inquirer');

function prompts(promptList) {
    return new Promise(function (resolve) {
        return inquirer
            .prompt(promptList)
            .then(answers => {
                resolve(answers)
            });
    })
};

function runPrompts(cmd, argv) {
    // return prompts()
};

function runInitPrompts(pathname) {
    const promptList = [
        {
            type: 'input',
            message: 'project name:',
            name: 'name',
            default: pathname,
        },
        {
            type: 'input',
            message: 'publish to npm name:',
            name: 'npmname',
            default: pathname,
        },
        {
            type: 'list',
            message: 'use JavaScript|TypeScript:',
            name: 'type',
            choices: [
                'JavaScript',
                'TypeScript',
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
            message: 'project language:',
            name: 'lang',
            choices: ['Chinese', 'English'],
            filter: function (value) {
                return ({
                    Chinese: 'zh',
                    English: 'en',
                }[value])
            }
        }
    ];
    return prompts(promptList);
}

exports.runPrompts = runPrompts;
exports.runInitPrompts = runInitPrompts;