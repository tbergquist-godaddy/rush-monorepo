// @flow strict

const path = require('path');

module.exports = {
  rootDir: __dirname,
  preset: '@tbergq/test-utils',
  moduleNameMapper: {
    '\\.(svg)$': (path.join(__dirname, 'mocks', 'svgFileMock.js') /*: string  */),
  },
};
