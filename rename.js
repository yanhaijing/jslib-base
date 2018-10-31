var path = require('path');

var cdkit = require('cdkit')

var fromName = 'jslib-base';
var toName = 'yanhajing';

function getFullPath (filename) {
    return path.join(__dirname, filename)
}

var map = [
    getFullPath('package.json'),
    getFullPath('README.md'),
    getFullPath('config/rollup.js'),
    getFullPath('test/browser/index.html'),
    getFullPath('demo/demo-global.html'),
];

const config = [
    {
        root: '.',
        rules: [
            {
                test: function (pathname) {
                    return map.some(function (u) {
                        return pathname.indexOf(u) > -1;
                    });
                },
                replace: [
                    {
                        from: fromName,
                        to: toName,
                    }
                ]
            }
        ]
    },
];

cdkit.run('replace', config);
