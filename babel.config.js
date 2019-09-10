const modules = {
  react: "@babel/preset-react",
  env: "@babel/preset-env",
  classProperties: "@babel/plugin-proposal-class-properties",
  syntaxDynamicImport: "@babel/plugin-syntax-dynamic-import",
  dynamicImportNode: "dynamic-import-node",
}

module.exports = api => {
  const test = api.env("test")
  let presets = [modules.react, modules.env]
  let plugins = [modules.classProperties, modules.syntaxDynamicImport]
  let ignore = []

  if (test) {
    presets = [modules.react, [modules.env, { targets: { node: "current" } }]]
    plugins = [...plugins, modules.dynamicImportNode]
  }

  return { presets, plugins, ignore }
}
