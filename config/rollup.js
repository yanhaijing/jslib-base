var typescript = require('rollup-plugin-typescript2');
var babel = require('rollup-plugin-babel');

var pkg = require('../package.json');

// compatible with jslib-base and @yanhaijing/jslib-base
// @yanhaijing/jslib-base -> jslib-base
var name = pkg.name.split('/').pop();
// @yanhaijing/jslib-base -> yanhaijing_jslib-base
// var name = pkg.name.replace('@', '').replace(/\//g, '_');
var version = pkg.version;

var banner = 
`/*!
 * ${pkg.name} ${version} (https://github.com/yanhaijing/jslib-base)
 * API https://github.com/yanhaijing/jslib-base/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} yanhaijing. All Rights Reserved
 * Licensed under MIT (https://github.com/yanhaijing/jslib-base/blob/master/LICENSE)
 */
`;

var type = pkg.srctype === 'ts' ? 'ts' : 'js';

function getCompiler(opt) {
    if (type === 'js') {
        return babel({
            babelrc: false,
            presets: [
                [
                    '@babel/preset-env',
                    {
                        'targets': {
                          'browsers': 'last 2 versions, > 1%, ie >= 6, Android >= 4, iOS >= 6, and_uc > 9',
                          'node': '0.10'
                        },
                        'modules': false,
                        'loose': false
                    }
                ]
            ],
            plugins: [
                [
                    '@babel/plugin-transform-runtime',
                    {
                        'helpers': false,
                        'regenerator': false
                    }
                ]
            ],
            runtimeHelpers: true,
            exclude: 'node_modules/**'
        });
    }

    opt = opt || {
        tsconfigOverride: { compilerOptions : { module: 'ES2015' } }
    }

    return typescript(opt);
}

exports.type = type;
exports.name = name;
exports.banner = banner;
exports.getCompiler = getCompiler;
