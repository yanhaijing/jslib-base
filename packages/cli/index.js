const fs = require('fs');
const path = require('path');
const todo = require('@js-lib/todo');

function init() {
    todo.init()
}
function update() {
    todo.update()
}

exports.init = init;
exports.update = update;