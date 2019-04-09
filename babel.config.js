let presets = ["@babel/preset-react", "@babel/preset-env"]
let plugins = ["@babel/plugin-proposal-class-properties"]

module.exports = api => {
  if (api.env("test")) {
    presets = ["@babel/preset-react", ["@babel/preset-env", { targets: { node: "current" } }]]
    plugins.push(["babel-plugin-webpack-aliases", { config: "./config/webpack.dev.js" }])
  } // else other env...

  return {
    presets,
    plugins,
  }
}
