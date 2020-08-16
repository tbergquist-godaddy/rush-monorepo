// @flow

const path = require('path');

module.exports = {
  rootDir: __dirname,
  bail: 100,
  reporters: [
    [
      (path.join(__dirname, 'JestReporter.js') /*: string */),
      {
        outputFilePath: (path.join(__dirname, 'test-results.json') /*: string */),
      },
    ],
  ],
};
