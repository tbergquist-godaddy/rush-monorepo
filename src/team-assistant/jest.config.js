// @flow

const path = require('path');

module.exports = {
  rootDir: __dirname,
  preset: '@tbergq/test-utils',
  moduleNameMapper: {
    '\\.(ttf|css)$': (path.join(__dirname, 'mocks', 'fileMock.js') /*: string  */),
    '\\.(svg)$': (path.join(__dirname, 'mocks', 'svgFileMock.js') /*: string  */),
  },
  setupFiles: [(path.join(__dirname, 'scripts', 'setupJest.js') /*: string  */)],
};
