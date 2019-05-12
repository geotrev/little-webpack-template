const path = require("path")

const ERROR = "error"
const NEVER = "never"

const srcPath = path.resolve(__dirname, "src")
const nodeModulesPath = path.resolve(__dirname, "node_modules")
const webpackConfigPath = path.resolve(__dirname, "webpack.common.js")

module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
    commonjs: true,
    es6: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    babelOptions: {
      configFile: "babel.config.js",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/strict",
    "prettier",
    "prettier/react",
    "prettier/babel",
  ],
  plugins: ["react", "jsx-a11y"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",

    // for jest tests
    expect: "readonly",
    render: "readonly",
    mount: "readyonly",
    shallow: "readyonly",
  },
  rules: {
    // override specific ruels here for vanilla js, react, and/or jsx-a11y.
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js"],
        paths: [srcPath],
        moduleDirectory: [nodeModulesPath],
      },
      webpack: { config: webpackConfigPath },
    },
    "import/ignore": [".(scss|less|css|md)$"],
    react: {
      version: "detect",
    },

    // for react-router-dom
    linkComponents: [{ name: "Link", linkAttribute: "to" }],
  },
}
