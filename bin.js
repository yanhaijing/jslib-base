#!/usr/bin/env node
// TODO
const sao = require('sao');
const minimist = require('minimist');

const argv = minimist(process.argv.slice(2));
// In a custom directory or current directory
const targetPath = argv._[0] || '.';

sao({
 // The path to your template
  template: __dirname + '/template',
  targetPath
}).catch(err => {
  console.error(err.name === 'SAOError' ? err.message : err.stack);
  process.exit(1);
});
