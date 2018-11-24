var typescript = require('rollup-plugin-typescript2');
var babel = require('rollup-plugin-babel');

var pkg = require('../package.json');

// 兼容 jslib-base 和 @yanhaijing/jslib-base 
var name = pkg.name.split('/').pop();
var version = pkg.version;

var banner = 
`/*!
 * jslib-base ${version} (https://github.com/yanhaijing/jslib-base)
 * API https://github.com/yanhaijing/jslib-base/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} yanhaijing. All Rights Reserved
 * Licensed under MIT (https://github.com/yanhaijing/jslib-base/blob/master/LICENSE)
 */
`;

var type = pkg.srctype === 'ts' ? 'ts' : 'js';

function getCompiler(opt) {
    if (type === 'js') {
        return babel({
            runtimeHelpers: true,
            exclude: 'node_modules/**'
        });
    }

    return typescript(opt);
}

exports.type = type;
exports.name = name;
exports.banner = banner;
exports.getCompiler = getCompiler;
