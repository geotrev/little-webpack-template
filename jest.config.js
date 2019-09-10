module.exports = {
  clearMocks: true,
  collectCoverageFrom: ["<rootDir>/app/**/*.js"],
  moduleNameMapper: {
    "\\.(css|sass|scss)$": "<rootDir>/.jest/__mocks__/emptyMock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$":
      "<rootDir>/.jest/__mocks__/emptyMock.js",
    "^root(.*?)$": "<rootDir>/$1",
    "^app(.*?)$": "<rootDir>/app/$1",
  },
  restoreMocks: true,
  roots: ["<rootDir>/app/"],
  setupFiles: ["<rootDir>/.jest/jest.setup.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testMatch: ["<rootDir>/app/**/*.spec.js"],
  testURL: "http://localhost/",
  transform: { "^.+\\.js$": "babel-jest" },
  unmockedModulePathPatterns: ["node_modules/react/", "node_modules/enzyme/"],
  verbose: false,
}
