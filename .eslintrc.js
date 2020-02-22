const path = require("path")

const READONLY = "readonly"
const APP_PATH = path.resolve(__dirname, "app")
const NODE_MODULES_PATH = path.resolve(__dirname, "node_modules")
const WEBPACK_CONFIG_PATH = path.resolve(__dirname, "webpack.common.js")

module.exports = {
  env: {
    browser: true,
    "jest/globals": true,
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
    "plugin:jest/recommended",
    "prettier",
    "prettier/react",
    "prettier/babel",
  ],
  plugins: ["react", "jsx-a11y"],
  globals: {
    Atomics: READONLY,
    SharedArrayBuffer: READONLY,

    // Jest tests
    expect: READONLY,
    render: READONLY,
    mount: READONLY,
    shallow: READONLY,
  },
  rules: {
    "jest/no-focused-tests": "error",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js"],
        paths: [APP_PATH],
        moduleDirectory: [NODE_MODULES_PATH],
      },
      webpack: { config: WEBPACK_CONFIG_PATH },
    },
    "import/ignore": [".(scss|less|css|md)$"],
    react: { version: "detect" },

    // for react-router-dom
    linkComponents: [{ name: "Link", linkAttribute: "to" }],
  },
}
