var merge = require('webpack-merge');
var common = require('./webpack.common.js');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new UglifyJsPlugin()
    ]
});
