// Install `dynamic-import-node` to devDependencies and add to plugins if you use dynamic imports
// Use `{ useBuiltIns: "entry" }` on `@babel/preset-env` if you use `@babel/polyfill` at the top src/index.js

module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    ["babel-plugin-webpack-aliases", { config: "./config/webpack.dev.js" }],
    "@babel/plugin-proposal-class-properties",
  ],
}
