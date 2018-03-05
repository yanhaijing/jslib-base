// rollup.config.js

var babel = require("rollup-plugin-babel");
var nodeResolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.aio.js',
        format: 'umd',
        name: 'jslib_base'
    },
    plugins: [
        nodeResolve({
            main: true
        }),
        commonjs({
            include: 'node_modules/**',
        }),
        babel({
            sourceMap: true,
            exclude: 'node_modules/**',
            babelrc: false,
            presets: [
                ['env', {
                    modules: false,
                    targets: {
                        "browsers": "last 2 versions, > 1%, ie >= 6",
                        "node": "0.10"
                    }
                }]
            ]
        })
    ]
};
