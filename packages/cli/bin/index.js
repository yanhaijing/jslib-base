#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const yargs = require('yargs');

const log = require('../util/log');

const { runInitPrompts } = require('./run-prompts');
const { checkProjectExists } = require('../util/file');
const { init } = require('./init');
const { update } = require('./update');

log.init();

yargs
  .usage('usage: jslib [options]')
  .usage('usage: jslib <command> [options]')
  .example('jslib new myproject', 'Create a new project myproject')
  .alias('h', 'help')
  .alias('v', 'version')
  .command(
    ['new', 'n'],
    'Create a new project',
    function (yargs) {
      return yargs
        .option('force', {
          alias: 'f',
          describe: 'Force create',
        })
        .option('config', {
          alias: 'c',
          describe: 'Initialize only the configuration file',
        })
        .option('npmname', {
          alias: 'n',
          describe: 'Initialize the npm package name',
        })
        .option('umdname', {
          alias: 'umd',
          describe: 'Initialize the UMD name for package',
        })
        .option('username', {
          alias: 'u',
          describe: 'Initialize the username',
        })
        .option('type', {
          alias: 't',
          describe: 'Initialize the js/ts selection',
        })
        .option('manager', {
          alias: 'm',
          describe: 'Select the package management method',
        });
    },
    function (argv) {
      runInitPrompts(argv._[1], yargs.argv).then(function (answers) {
        init(argv, answers);
      });
    },
  )
  .command(['update', 'u'], 'Update a project', function (_yargs) {
    if (!checkProjectExists(process.cwd(), 'jslib.json')) {
      console.error(
        'error: This is not a jslib library, missing jslib.json file',
      );
      return;
    }

    const json = JSON.parse(
      fs.readFileSync(path.resolve(process.cwd(), 'jslib.json'), {
        encoding: 'utf8',
      }),
    );

    update(json);
  })
  .demandCommand()
  .epilog('copyright 2018-2025').argv;
