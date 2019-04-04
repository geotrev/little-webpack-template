const presets = ["@babel/preset-react", "@babel/preset-env"]
const plugins = ["@babel/plugin-proposal-class-properties"]

const config = api => {
  if (api.env("test")) {
    // remove current instance of @babel/preset-env and add new one with targets defined
    presets.pop()
    presets.push(["@babel/preset-env", { targets: { node: "current" } }])

    // to allow webpack aliases to resolve
    plugins.push(["babel-plugin-webpack-aliases", { config: "./config/webpack.dev.js" }])
  }

  return {
    presets,
    plugins,
  }
}

module.exports = config
