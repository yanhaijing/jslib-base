// rollup.config.js

var babel = require('rollup-plugin-babel');
var common = require('./rollup.js');

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        // 如果不同时使用 export 与 export default 可打开legacy
        // legacy: true,
        banner: common.banner,
    },
    plugins: [
        babel({
            runtimeHelpers: true,
            exclude: 'node_modules/**'
        })
    ]
};
