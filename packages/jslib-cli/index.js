#!/usr/bin/env node
var copydir = require('copy-dir')


console.log(process.argv.slice(2))


console.log(__dirname)

 
// copydir.sync(`${__dirname}/base`, process.cwd(), {
//   mode: true,    // keep file mode
//   cover: true    // cover file when exists, default is true
// })
