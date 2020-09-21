// @flow

const path = require('path');

module.exports = {
  rootDir: __dirname,
  preset: '@tbergq/test-utils',
  moduleNameMapper: {
    '\\.(ttf|svg|css)$': (path.join(__dirname, 'mocks', 'fileMock.js') /*: string  */),
  },
  setupFiles: [(path.join(__dirname, 'scripts', 'setupJest.js') /*: string  */)],
};
