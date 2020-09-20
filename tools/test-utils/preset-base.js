// @flow

const path = require('path');

const distPath = path.join(__dirname, 'dist');

const config = {
  reporters: [
    [
      (path.join(distPath, 'jest-reporter.js') /*: string */),
      {
        outputFilePath: (path.join(__dirname, 'test-results.json') /*: string */),
      },
    ],
  ],
};

module.exports = config;
