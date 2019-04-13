const merge = require("webpack-merge")
const CompressionPlugin = require("compression-webpack-plugin")
const common = require("../webpack.common.js")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",

  optimization: {
    splitChunks: {
      chunks: "all",
    },
    runtimeChunk: {
      name: "manifest",
    },
    minimizer: [
      new UglifyJsPlugin({
        exclude: /\/(node_modules|bower_components)/,
        cache: true,
        parallel: true,
        sourceMap: false,
      }),
    ],
  },

  plugins: [
    // Clean build/ directory before running Webpack
    new CleanWebpackPlugin(),

    // Create gzip compressed assets to be served by Express
    new CompressionPlugin({
      test: /\.(js|css|html)$/,
      algorithm: "gzip",
    }),

    // Optimize CSS assets
    new OptimizeCSSAssetsPlugin({
      cssProcessorPluginOptions: {
        preset: [
          "default",
          {
            discardComments: { removeAll: true },
          },
        ],
      },
    }),
  ],

  // No need for log vomit
  stats: { children: false },
})
