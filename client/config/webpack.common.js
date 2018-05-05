var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');
var _distPath = path.join(__dirname, "../dist");
var _srcPath = path.resolve(__dirname, './src');

module.exports = {

    devServer: {
      contentBase: _distPath,
      compress: true,
      port: 9001
    },

    entry: {
      'app-vendor': path.resolve(__dirname, '../src/vendor.ts'),
      'app-main': path.resolve(__dirname, '../src/main.ts')
    },

    output: {
      path: _distPath,
      filename: '[name].bundle.js'
    },

    module: {
      rules: [
        {
          test:/\.ts$/,
          use:[ { loader: 'ts-loader' } ],
          exclude: /node_modules/
        }
      ]
    },

    resolve: {
      extensions: ['*', '.js', '.ts']
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../src/index.html')
      }),
      new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)/, _srcPath)
    ],

    stats: {
      warnings: false
    }

};
