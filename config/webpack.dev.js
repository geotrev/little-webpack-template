const merge = require('webpack-merge');
const common = require('../webpack.common.js');

module.exports = merge(common, {
  // Better source maps for development.
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '/build/',
    publicPath: '/',
    historyApiFallback: true,
    port: 5050,
  },
  mode: 'development'
});
