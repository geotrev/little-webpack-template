const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

const rootPath = __dirname

module.exports = {
  entry: {
    main: path.resolve(__dirname, "app/index.js"),
  },
  output: {
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].js",
    path: path.resolve(rootPath, "build"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".js"],
    alias: {
      root: path.resolve(__dirname),
      app: path.resolve(__dirname, "app"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: "babel-loader?cacheDirectory",
      },
      {
        test: /\.s?[ca]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { importLoaders: 2 },
          },
          "postcss-loader",
          {
            loader: "sass-loader?sourceMap",
            options: {
              sassOptions: {
                includePaths: ["src/"],
              },
            },
          },
        ],
        include: [path.resolve(__dirname, "app")],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(ico|eot|svg|ttf|woff2?|otf)$/,
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
    // Output bundles to main layout file
    new HtmlWebpackPlugin({
      template: path.resolve(rootPath, "public/index.html"),
    }),

    // Output main and chunked CSS files
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[name].[contenthash].css",
    }),

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
}
