const merge = require("webpack-merge")
const common = require("../webpack.common.js")

module.exports = merge(common, {
  mode: "development",

  // Better source maps for development
  devtool: "eval-source-map",

  // Set development server options
  devServer: {
    contentBase: "/build/",
    publicPath: "/",
    historyApiFallback: true,
    port: 3000,
  },
})
