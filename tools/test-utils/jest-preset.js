// @flow

const path = require('path');
const preset = require('./preset-base');
const distPath = path.join(__dirname, 'dist');

const config = {
  ...preset,
  setupFilesAfterEnv: ([path.join(distPath, 'setup-test.js')] /*: string[]  */),
};

module.exports = config;
