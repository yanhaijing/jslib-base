var pkg = require('../package.json');

// 兼容 jslib-base 和 @yanhaijing/jslib-base 
var name = pkg.name.split('/').pop();
var version = pkg.version;

// 兼容 "author": "yanhaijing" 和 "author": {"name": "yanhaijing"}
var author = pkg.author.name || pkg.author;

var banner = 
`/*!
 * ${name} ${version} (https://github.com/${author}/${name})
 * API https://github.com/${author}/${name}/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} ${author}. All Rights Reserved
 * Licensed under MIT (https://github.com/${author}/${name}/blob/master/LICENSE)
 */
`;

exports.name = name;
exports.banner = banner;
