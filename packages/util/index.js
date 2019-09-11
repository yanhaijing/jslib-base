const fs = require('fs');
const path = require('path');

const copydir = require('copy-dir');
const template = require('template_js');

function isTemplate(pathname) {
    return path.extname(pathname) === '.tmpl';
}

function mkdir(pathname) {
    const parentPath = path.dirname(pathname);

    fs.mkdirSync(parentPath, { recursive: true });
}

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

exports.copyDir = copyDir;
exports.copyFile = copyFile;
exports.copyTmpl = copyTmpl;