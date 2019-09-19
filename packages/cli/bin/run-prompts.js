const inquirer = require('inquirer');
const validate = require('validate-npm-package-name');

function prompts(promptList) {
    return new Promise(function (resolve) {
        return inquirer
            .prompt(promptList)
            .then(answers => {
                resolve(answers)
            });
    })
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
            validate: function(val) {
                if (!validate(val).validForNewPackages) {
                    return "npm 包名不合法";
                }
                return true
            }
        },
        {
            type: 'input',
            message: 'github user name:',
            name: 'username',
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

function runUpdatePrompts() {
    const promptList = [
        // {
        //     type: 'confirm',
        //     message: '是否更新<root>插件:',
        //     name: 'root',
        //     default: false,
        // },
        {
            type: 'confirm',
            message: '是否更新<package>插件:',
            name: 'package',
            default: false,
        },
        // {
        //     type: 'confirm',
        //     message: '是否更新<license>插件:',
        //     name: 'license',
        //     default: false,
        // },
        // {
        //     type: 'confirm',
        //     message: '是否更新<readme>插件:',
        //     name: 'readme',
        //     default: false,
        // },
        // {
        //     type: 'confirm',
        //     message: '是否更新<demo>插件:',
        //     name: 'demo',
        //     default: false,
        // },
        {
            type: 'confirm',
            message: '是否更新<src>插件:',
            name: 'src',
            default: false,
        },
        {
            type: 'confirm',
            message: '是否更新<eslint>插件:',
            name: 'eslint',
            default: false,
        },
        {
            type: 'confirm',
            message: '是否更新<rollup>插件:',
            name: 'rollup',
            default: false,
        },
        {
            type: 'confirm',
            message: '是否更新<test>插件:',
            name: 'test',
            default: false,
        },
    ];
    return prompts(promptList);
}

exports.runInitPrompts = runInitPrompts;
exports.runUpdatePrompts = runUpdatePrompts;