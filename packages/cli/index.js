var fs = require('fs');
var path = require('path');
var todo = require('@js-lib/todo');

function init() {
    todo.init()
}
function update() {
    todo.update()
}

exports.init = init;
exports.update = update;