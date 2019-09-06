#!/usr/bin/env node

const copydir = require('copy-dir')
const copyPath = `${__dirname}/base`
const pastePath = process.cwd()
 
copydir.sync(coptPath, pastePath, {
  mode: true,
  cover: true 
})
