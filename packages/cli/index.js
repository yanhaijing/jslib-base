const fs = require('fs');
const path = require('path');
const todo = require('@js-lib/todo');

function init(cmdPath, name, option) {
    todo.init(cmdPath, name, option)
}
function update(cmdPath, option) {
    todo.update(cmdPath, option)
}

exports.init = init;
exports.update = update;