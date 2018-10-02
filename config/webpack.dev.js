const merge = require("webpack-merge")
const common = require("../webpack.common.js")

module.exports = merge(common, {
  // Better source maps for development
  devtool: "inline-source-map",

  // Set development server options
  devServer: {
    contentBase: "/build/",
    publicPath: "/",
    historyApiFallback: true,
    port: 5050,
  },

  // Define environment (since Webpack 4)
  mode: "development",
})
