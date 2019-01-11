const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const rootPath = __dirname

module.exports = {
  entry: path.resolve(rootPath, "src/index.js"),
  output: {
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
    path: path.resolve(rootPath, "build"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".js"],
    alias: {
      routes: path.resolve(rootPath, "src/routes"),
      helpers: path.resolve(rootPath, "src/helpers/"),
      components: path.resolve(rootPath, "src/components/"),
      pages: path.resolve(rootPath, "src/pages/"),
      assets: path.resolve(rootPath, "src/assets/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: "babel-loader",
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "postcss-loader",
            options: {
              config: { path: "config/postcss.config.js" },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(ico|png|jpe?g|gif|eot|svg|ttf|woff2?|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(rootPath, "public/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
    }),
  ],
}
