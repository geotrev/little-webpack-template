const common = require("./webpack.common.js")
const merge = require("webpack-merge")
const CompressionPlugin = require("compression-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")

module.exports = merge(common, {
  mode: "production",

  // Production-specific optimizations
  optimization: {
    splitChunks: { chunks: "all" },
    runtimeChunk: { name: "manifest" },
    minimize: true,
    minimizer: [new TerserPlugin()],
  },

  // No need for log vomit
  stats: {
    children: false,
    warnings: false,
    entrypoints: false,
    modules: false,
    errorDetails: true,
    errors: true,
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
        preset: ["default", { discardComments: { removeAll: true } }],
      },
    }),
  ],
})
