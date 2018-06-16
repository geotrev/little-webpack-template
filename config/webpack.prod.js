const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin')
const common = require('../webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
  plugins: [
    // Clean build/ directory before running Webpack
    new CleanWebpackPlugin(
      [ '../build' ],
      {
        root: path.resolve(__dirname),
        verbose: true,
        allowExternal: true
      }
    ),

    // Create gzip compressed assets to be served by Express
    new CompressionPlugin({
      test: /\.(js|css)$/,
      algorithm: "gzip",
    }),
  ],

  // No need for log vomit
  stats: { children: false },

  // Uglify the output with a source map
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        sourceMap: true,
      }),
    ],
  },

  mode: 'production'
});
