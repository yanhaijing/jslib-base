// rollup.config.js
// commonjs
var common = require('./rollup.js');

module.exports = {
    input: 'src/index.' + common.type,
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        // 如果不同时使用 export 与 export default 可打开legacy
        // legacy: true,
        banner: common.banner,
    },
    plugins: [
        common.getCompiler({
            tsconfigOverride: { compilerOptions : { declaration: true } },
            useTsconfigDeclarationDir: true
        })
    ]
};
