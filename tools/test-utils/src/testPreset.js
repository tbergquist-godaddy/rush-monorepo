const path = require('path');

const config = {};

config.reporters = [
  [
    (path.join(__dirname, 'JestReporter.js') /*: string */),
    {
      outputFilePath: (path.join(__dirname, 'test-results.json') /*: string */),
    },
  ],
];

module.exports = config;
