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

let promptList = [];

function runInitPrompts(pathname, argv) {
    const {npmname, umdname, username, type, module, test, lang, manager} = argv
    
    promptList.push({
        type: 'input',
        message: 'project name:',
        name: 'name',
        default: pathname,
        validate: function(val) {
            if (!val) {
                return "Please enter name";
            }
            return true
        }
    })

    if (!npmname) {
        promptList.push({
            type: 'input',
            message: 'publish to npm name:',
            name: 'npmname',
            default: pathname,
            validate: function(val) {
                if (!validate(val).validForNewPackages) {
                    return "Forbidden npm name";
                }
                return true
            }
        })
    }
    if (!umdname) {
        promptList.push({
            type: 'input',
            message: 'publish to umd name:',
            name: 'umdname',
            default: pathname,
            validate: function(val) {
                if (!val) {
                    return "Please enter name";
                }
                return true
            }
        })
    }
    if (!username) {
        promptList.push({
            type: 'input',
            message: 'github user name:',
            name: 'username',
            validate: function(val) {
                if (!val) {
                    return "Please enter name";
                }
                return true
            }
        })
    }
    if (!type) {
        promptList.push({
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
        })
    }
    if (!module) {
        promptList.push({
            type: 'checkbox',
            message: 'use module:',
            name: 'module',
            choices: [
                'umd',
                'esm',
                'commonjs',
            ],
            default: ['umd', 'esm', 'commonjs'],
            validate: function(val) {
                if (!val.length) {
                    return "Choose at least one module";
                }
                return true
            }
        })
    }
    if (!test) {
        promptList.push({
            type: 'list',
            message: 'use tester:',
            name: 'test',
            choices: [
                'mocha',
                'none',
            ],
            filter: function (value) {
                return ({
                    mocha: 'mocha',
                    none: null
                }[value])
            }
        })
    }
    if (!lang) {
        promptList.push({
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
        })
    }
    if (!manager) {
        promptList.push({
            type: 'list',
            message: 'package manager:',
            name: 'manager',
            choices: ['no install', 'npm', 'yarn'],
            filter: function (value) {
                return ({
                    npm: 'npm',
                    yarn: 'yarn',
                    'no install': null
                }[value])
            }
        })
    }
    return prompts(promptList);
}

function runUpdatePrompts() {
    const promptList = [
        {
            type: 'confirm',
            message: '是否更新<root>插件:',
            name: 'root',
            default: false,
        },
        {
            type: 'confirm',
            message: '是否更新<package>插件:',
            name: 'package',
            default: false,
        },
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