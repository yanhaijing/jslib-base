// rollup.config.js
// ES output
var common = require('./rollup.js');

module.exports = {
    input: 'src/index.' + common.type,
    output: {
        file: 'dist/index.esm.js',
        format: 'es',
        // 如果不同时使用 export 与 export default 可打开legacy
        // legacy: true,
        banner: common.banner,
    },
    plugins: [
        common.getCompiler()
    ]
};
