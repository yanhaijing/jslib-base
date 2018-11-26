// rollup.config.js
// commonjs
var common = require('./rollup.js');

module.exports = {
    input: common.input,
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        // When export and export default are not used at the same time, set legacy to true.
        // legacy: true,
        banner: common.banner,
    },
    plugins: [
        <%_ if (compiler.useTypescript) { _%>
        common.compiler({
            tsconfigOverride: { compilerOptions : { declaration: true } },
            useTsconfigDeclarationDir: true
        })
        <%_ } _%>
        <%_ if (compiler.useBabel) { _%>
        common.compiler()
        <%_ } _%>
    ]
};
