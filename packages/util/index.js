const fs = require('fs');
const path = require('path');

const copydir = require('copy-dir');
const template = require('template_js');
const { extendDeep } = require('@jsmini/extend');

function isTemplate(pathname) {
    return path.extname(pathname) === '.tmpl';
}

// function mkdir(pathname) {
//     const parentPath = path.dirname(pathname);

//     fs.mkdirSync(parentPath, { recursive: true });
// }

function copyDir(from, to, options) {
    copydir.sync(from, to, options);
}

function copyFile(from, to) {
    const buffer = fs.readFileSync(from);
    const parentPath = path.dirname(to);

    if (!fs.existsSync(parentPath)) {
        fs.mkdirSync(parentPath, { recursive: true });
    }

    fs.writeFileSync(to, buffer);  
}

function copyTmpl(from, to, data = {}) {
    if (!isTemplate(from)) {
        return copyFile(from, to);
    }

    const parentPath = path.dirname(to);

    if (!fs.existsSync(parentPath)) {
        fs.mkdirSync(parentPath, { recursive: true });
    }

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