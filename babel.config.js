module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    [
      "babel-plugin-webpack-aliases",
      {
        config: "./config/webpack.dev.js",
      },
    ],
  ],
}
