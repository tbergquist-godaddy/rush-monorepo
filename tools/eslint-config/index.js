// @flow

const config = require('@adeira/eslint-config/strict');

const OFF = 0;

const tbergqConfig = {
  ...config,
  rules: {
    ...config.rules,
    'flowtype/require-inexact-type': OFF,
  },
};

module.exports = tbergqConfig;
