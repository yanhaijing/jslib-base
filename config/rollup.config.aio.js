// rollup.config.js

var babel = require('rollup-plugin-babel');
var nodeResolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var uglify = require('rollup-plugin-uglify').uglify;

var common = require('./rollup.js');

export default {
    input: 'src/index.js',
    output: {
        file: process.env.NODE_ENV === 'production' 
            ? 'dist/index.aio.min.js' 
            : 'dist/index.aio.js',
        format: 'umd',
        // 如果不同时使用 export 与 export default 可打开legacy
        // legacy: true,
        name: common.name,
        banner: common.banner,
    },
    plugins: [
        nodeResolve({
            main: true
        }),
        commonjs({
            include: 'node_modules/**',
        }),
        babel({
            runtimeHelpers: true,
            exclude: 'node_modules/**'
        }),
        (process.env.NODE_ENV === 'production' && uglify())
    ]
};
