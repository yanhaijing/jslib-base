// rollup.config.js

var babel = require('rollup-plugin-babel');
var common = require('./rollup.js');

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
    },
    banner: common.banner,
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
};
