
module.exports = {
  // NOTE: Add `{ useBuiltIns: "entry", corejs: 3 }` and install `corejs` and `regenerator-runtime` packages to enable polyfills on `preset-env`
  presets: ["@babel/preset-env", "@babel/preset-react"],
  // NOTE: Install `dynamic-import-node` to devDependencies and add to plugins to enable d ynamic imports
  plugins: [
    ["babel-plugin-webpack-aliases", { config: "./config/webpack.dev.js" }],
    "@babel/plugin-proposal-class-properties",
  ],
}
