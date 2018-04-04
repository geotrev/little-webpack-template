const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '/build/',
    publicPath: '/',
    historyApiFallback: true,
    port: 5500,
  },
  mode: 'development'
});
