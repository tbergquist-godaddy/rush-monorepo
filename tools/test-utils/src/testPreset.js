const path = require('path');
const isCi = require('is-ci');

const config = {};

if (isCi) {
  config.reporters = [
    [
      (path.join(__dirname, 'JestReporter.js') /*: string */),
      {
        outputFilePath: (path.join(__dirname, 'test-results.json') /*: string */),
      },
    ],
  ];
}

module.exports = config;
