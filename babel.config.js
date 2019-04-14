let presets = ["@babel/preset-react", "@babel/preset-env"]
let plugins = ["@babel/plugin-proposal-class-properties", "@babel/plugin-syntax-dynamic-import"]

module.exports = api => {
  const test = api.env("test")

  if (test) {
    presets = ["@babel/preset-react", ["@babel/preset-env", { targets: { node: "current" } }]]
    plugins = [
      ...plugins,
      "dynamic-import-node",
      ["babel-plugin-webpack-aliases", { config: "./config/webpack.dev.js" }],
    ]
  }

  return {
    presets,
    plugins,
  }
}
