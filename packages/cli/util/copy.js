/* eslint-disable no-prototype-builtins */
const fs = require('fs');
const path = require('path');

const copydir = require('copy-dir');
const template = require('template_js');
const { extendDeep } = require('@jsmini/extend');

function isTemplate(pathname) {
  return path.extname(pathname) === '.tmpl';
}

function deleteFile(filePath) {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
}

function deleteDir(dirPath) {
  if (fs.existsSync(dirPath)) {
    try {
      fs.rmSync(dirPath, { recursive: true, force: true });
    } catch (e) {
      // rmSync is not supported in node 12
      fs.rmdirSync(dirPath, { recursive: true });
    }
  } else {
    console.log('deleteDir: Directory path ' + dirPath + ' not found!');
  }
}

function copyDir(from, to, options) {
  copydir.sync(from, to, options);
}

function mkdirSyncGuard(target) {
  try {
    fs.mkdirSync(target, { recursive: true });
  } catch (e) {
    mkdirp(target);
    // eslint-disable-next-line no-inner-declarations
    function mkdirp(dir) {
      if (fs.existsSync(dir)) {
        return true;
      }
      const dirname = path.dirname(dir);
      mkdirp(dirname);
      fs.mkdirSync(dir);
    }
  }
}

function copyFile(from, to, opt = { cover: true }) {
  // 不覆盖时，检测文件是否存在
  if (!opt.cover && fs.existsSync(to)) {
    return;
  }

  const buffer = fs.readFileSync(from);
  const parentPath = path.dirname(to);

  if (!fs.existsSync(parentPath)) {
    mkdirSyncGuard(parentPath);
  }

  fs.writeFileSync(to, buffer);
}

function readTmpl(from, data = {}) {
  const text = fs.readFileSync(from, { encoding: 'utf8' });
  return template(text, data);
}

function copyTmpl(from, to, data = {}, opt = { cover: true }) {
  // 不覆盖时，检测文件是否存在
  if (!opt.cover && fs.existsSync(to)) {
    return;
  }

  if (!isTemplate(from)) {
    return copyFile(from, to);
  }

  const parentPath = path.dirname(to);

  mkdirSyncGuard(parentPath);

  fs.writeFileSync(to, readTmpl(from, data), { encoding: 'utf8' });
}

function mergeObj2JSON(object, to) {
  const json = JSON.parse(fs.readFileSync(to, { encoding: 'utf8' }));

  extendDeep(json, object);

  fs.writeFileSync(to, JSON.stringify(json, null, '  '), { encoding: 'utf8' });
}

function deleteKeys(obj, keysObj) {
  for (let key in keysObj) {
    if (typeof keysObj[key] === 'object' && keysObj[key] !== null) {
      if (obj.hasOwnProperty(key) && typeof obj[key] === 'object') {
        deleteKeys(obj[key], keysObj[key]);
      }
    } else if (obj.hasOwnProperty(key)) {
      delete obj[key];
    }
  }
  return obj;
}

function deleteJSONKeys(keysObj, to) {
  const obj = JSON.parse(fs.readFileSync(to, { encoding: 'utf8' }));
  deleteKeys(obj, keysObj);
  fs.writeFileSync(to, JSON.stringify(obj, null, '  '), { encoding: 'utf8' });
}

function mergeJSON2JSON(from, to) {
  const json = JSON.parse(fs.readFileSync(from, { encoding: 'utf8' }));

  mergeObj2JSON(json, to);
}

function mergeTmpl2JSON(from, to, data = {}) {
  const json = JSON.parse(readTmpl(from, data));
  mergeObj2JSON(json, to);
}

function replaceFileLine(filepath, match, to) {
  let file = fs.readFileSync(filepath, { encoding: 'utf8' });
  let count = 0;

  // file 按行分隔，如果匹配match，则替换为to
  file = file
    .split('\n')
    .map(function (line) {
      if (match.test(line)) {
        count += 1;
        return to;
      }
      return line;
    })
    .join('\n');

  if (count) {
    fs.writeFileSync(filepath, file);
  }
}

// 参考replaceFileLine 写一个删除行的方法
function deleteFileLine(filepath, match) {
  let file = fs.readFileSync(filepath, { encoding: 'utf8' });
  let count = 0;

  // file 按行分隔，如果匹配match，则删除
  file = file
    .split('\n')
    .filter(function (line) {
      if (match.test(line)) {
        count += 1;
        return false;
      }
      return true;
    })
    .join('\n');

  if (count) {
    fs.writeFileSync(filepath, file);
  }
}

function replaceFileText(filepath, replacerList) {
  let file = fs.readFileSync(filepath, { encoding: 'utf8' });
  let count = 0;

  // 对文件内容进行替换
  replacerList.forEach(function (replacer) {
    var res;
    // 支持字符串和正则的替换
    while ((res = file.match(replacer.from))) {
      count += 1;

      // 支持函数，支持替换中的正则引用 $0 $1 $2
      var to =
        typeof replacer.to === 'function'
          ? replacer.to
          : replacer.to.replace(/\$(\d+)/g, function (match, p1) {
              return res[p1] || '';
            });

      file = file.replace(replacer.from, to);
    }
  });

  if (count) {
    fs.writeFileSync(filepath, file);
  }
}

/**
 * 将文本插入到文件，文件不存在会自动创建
 */
function insertText2File(text, filepath, line = -1) {
  const lines = fs.existsSync(filepath)
    ? fs.readFileSync(filepath, { encoding: 'utf8' }).split('\n')
    : [];

  if (line === -1) {
    lines.push(text);
  } else {
    lines.splice(line, 0, text);
  }

  const parentPath = path.dirname(filepath);

  if (!fs.existsSync(parentPath)) {
    mkdirSyncGuard(parentPath);
  }

  fs.writeFileSync(filepath, lines.join('\n'), {
    encoding: 'utf8',
  });
}

exports.copyDir = copyDir;
exports.copyFile = copyFile;
exports.readTmpl = readTmpl;
exports.copyTmpl = copyTmpl;
exports.mergeObj2JSON = mergeObj2JSON;
exports.deleteJSONKeys = deleteJSONKeys;
exports.mergeJSON2JSON = mergeJSON2JSON;
exports.mergeTmpl2JSON = mergeTmpl2JSON;
exports.replaceFileText = replaceFileText;
exports.insertText2File = insertText2File;
exports.replaceFileLine = replaceFileLine;
exports.deleteFileLine = deleteFileLine;
exports.deleteFile = deleteFile;
exports.deleteDir = deleteDir;
