const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const rootPath = __dirname

module.exports = productionMode => {
  const cssExtractMethod = productionMode ? MiniCssExtractPlugin.loader : "style-loader"

  return {
    entry: path.resolve(rootPath, "src/index.js"),
    output: {
      filename: "[name].[chunkhash].js",
      chunkFilename: "[name].[chunkhash].js",
      path: path.resolve(rootPath, "build"),
      publicPath: "/",
    },
    resolve: {
      extensions: [".js", ".jsx"],
      alias: {
        routes: path.resolve(rootPath, "src/routes"),
        helpers: path.resolve(rootPath, "src/helpers/exports"),
        components: path.resolve(rootPath, "src/components/exports"),
        pages: path.resolve(rootPath, "src/pages/exports"),
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
            cssExtractMethod,
            {
              loader: "css-loader",
              options: {
                minimize: true,
                sourceMap: true,
              },
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
        filename: productionMode ? "[name].[chunkhash].css" : "[name].css",
      }),
    ],
  }
}
