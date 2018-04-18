const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin')
const common = require('../webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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

    // Process bundled JS
    new UglifyJSPlugin({
      sourceMap: true
    }),

    // Create gzip compressed assets to be served by Express
    new CompressionPlugin({
      test: /\.(js|css)$/,
      algorithm: "gzip",
    }),

    // Copy app manifest 1-to-1
    new CopyWebpackPlugin([{
      from: 'public/manifest.json',
      to: 'manifest.json',
      cache: true
    }]),

  ],

  // No need for log vomit
  stats: { children: false },

  // Define environment (since Webpack 4)
  mode: 'production'
});
