const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin')
const common = require('../webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
  plugins: [
    // Clean build/ directory before running Webpack
    new CleanWebpackPlugin([ 'build' ], { verbose: true }),
    // Uglify JS
    new UglifyJSPlugin({
      sourceMap: true
    }),
    // Create gzip compressed assets to be served by Express
    new CompressionPlugin({
      test: /\.(js|css)$/,
      algorithm: "gzip",
    }),
  ],
  mode: 'production'
});
