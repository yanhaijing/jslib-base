const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const copydir = require('copy-dir');
const template = require('template_js');
const { extendDeep } = require('@jsmini/extend');

function log (string) {
    window.console.log = console.log(chalk.bold.green(string))
    window.console.warning = console.log(chalk.bold.orange(string))
    window.console.error = console.log(chalk.bold.red(string))
}

function isTemplate(pathname) {
    return path.extname(pathname) === '.tmpl';
}

function copyDir(from, to, options) {
    copydir.sync(from, to, options);
}

function mkdirSyncGuard(target) {
    try {
        fs.mkdirSync(target, { recursive: true });
    } catch(e) {
        mkdirp(target)
        function mkdirp(dir) {
            if (fs.existsSync(dir)) { return true }
            const dirname = path.dirname(dir)
            mkdirp(dirname)
            fs.mkdirSync(dir)
        }
    }
}

function copyFile(from, to) {
    const buffer = fs.readFileSync(from);
    const parentPath = path.dirname(to);

    if (!fs.existsSync(parentPath)) {
        mkdirSyncGuard(parentPath)
    }

    fs.writeFileSync(to, buffer);  
}

function copyTmpl(from, to, data = {}) {
    if (!isTemplate(from)) {
        return copyFile(from, to);
    }

    const parentPath = path.dirname(to);

    mkdirSyncGuard(parentPath)

    const text = fs.readFileSync(from, { encoding: 'utf8' });
    fs.writeFileSync(to, template(text, data), { encoding: 'utf8' });
}

function mergeObj2JSON(object, to) {
    const json = JSON.parse(fs.readFileSync(to, { encoding: 'utf8' }));
    
    extendDeep(json, object);
    
    fs.writeFileSync(to, JSON.stringify(json, null, '  '), { encoding: 'utf8' });
}

function mergeJSON2JSON(from, to) {
    const json = JSON.parse(fs.readFileSync(from, { encoding: 'utf8' }));

    mergeObj2JSON(json, to);
}

exports.copyDir = copyDir;
exports.copyFile = copyFile;
exports.copyTmpl = copyTmpl;
exports.mergeObj2JSON = mergeObj2JSON;
exports.mergeJSON2JSON = mergeJSON2JSON;
exports.log = log;