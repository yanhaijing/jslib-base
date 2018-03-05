const path = require("path");

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].aio.js",
        libraryTarget: "umd",
        library: 'jslib_base',
        umdNamedDefine: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    }
}
