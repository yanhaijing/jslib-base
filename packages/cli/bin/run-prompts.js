const inquirer = require('inquirer');
const validate = require('validate-npm-package-name');

function prompts(promptList) {
  return new Promise(function (resolve) {
    return inquirer.prompt(promptList).then((answers) => {
      resolve(answers);
    });
  });
}

let promptList = [];

function runInitPrompts(pathname, argv) {
  const { npmname, umdname, username, type, manager } = argv;

  promptList.push({
    type: 'input',
    message: 'project name:',
    name: 'name',
    default: pathname,
    validate: function (val) {
      if (!val) {
        return 'Please enter name';
      }
      return true;
    },
  });

  if (!npmname) {
    promptList.push({
      type: 'input',
      message: 'npm package name:',
      name: 'npmname',
      default: pathname,
      validate: function (val) {
        if (!validate(val).validForNewPackages) {
          return 'Forbidden npm name';
        }
        return true;
      },
    });
  }
  if (!umdname) {
    promptList.push({
      type: 'input',
      message: 'UMD name for package:',
      name: 'umdname',
      default: pathname,
      validate: function (val) {
        if (!val) {
          return 'Please enter name';
        }
        return true;
      },
    });
  }
  if (!username) {
    promptList.push({
      type: 'input',
      message: 'github user name:',
      name: 'username',
      validate: function (val) {
        if (!val) {
          return 'Please enter name';
        }
        return true;
      },
    });
  }
  if (!type) {
    promptList.push({
      type: 'list',
      message: 'select template:',
      name: 'type',
      choices: ['JavaScript', 'TypeScript'],
      filter: function (value) {
        return {
          TypeScript: 'ts',
          JavaScript: 'js',
        }[value];
      },
    });
  }
  if (!manager) {
    promptList.push({
      type: 'list',
      message: 'package manager:',
      name: 'manager',
      choices: ['npm', 'no install'],
      filter: function (value) {
        return {
          npm: 'npm',
          'no install': null,
        }[value];
      },
    });
  }
  return prompts(promptList);
}

exports.runInitPrompts = runInitPrompts;
