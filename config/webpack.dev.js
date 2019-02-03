const merge = require("webpack-merge")
const common = require("../webpack.common.js")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = merge(common, {
  mode: "development",

  // Better source maps for development
  devtool: "eval-source-map",

  plugins: [
    // Copy all assets in `public/static/`, browserconfig, and manifest
    new CopyWebpackPlugin([
      {
        from: "public/manifest.json",
        to: "manifest.json",
        cache: true,
      },
      {
        from: "public/browserconfig.xml",
        to: "browserconfig.xml",
        cache: true,
      },
      {
        from: "public/static/**/*",
        to: "assets/[name].[ext]",
        cache: true,
      },
    ]), 
  ],

  // Set development server options
  devServer: {
    contentBase: "/build/",
    publicPath: "/",
    historyApiFallback: true,
    port: 3000,
  },
})
