var pkg = require('../package.json');

var banner =
`/*!
 * <%= name %> ${pkg.version} (https://github.com/<%= username %>/<%= name %>)
 * API https://github.com/<%= username %>/<%= name %>/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} <%= username %>. All Rights Reserved
 * Licensed under MIT (https://github.com/<%= username %>/<%= name %>/blob/master/LICENSE)
 */
`;
<%_ if (compiler.useBabel) { _%>

function compiler(opt = {
    runtimeHelpers: true,
    exclude: 'node_modules/**'
}) {
    return require('rollup-plugin-babel')(opt);
}

<%_ } _%>
<%_ if (compiler.useTypescript) { _%>

function compiler(opt) {
    return require('rollup-plugin-typescript2')(opt);
}

<%_ } _%>
exports.input = 'src/index.<%= compiler.suffix %>';
exports.name = '<%= name %>';
exports.banner = banner;
exports.compiler = compiler;
