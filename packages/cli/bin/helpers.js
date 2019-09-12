const fs = require('fs');
const path = require('path');

function checkProjectExists(cmdPath, name) {
    return fs.existsSync(path.resolve(cmdPath, name))
};

exports.checkProjectExists = checkProjectExists;