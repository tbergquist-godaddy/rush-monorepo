// @flow

module.exports = {
  root: true,

  extends: ['@tbergq/eslint-config'],

  // adjust the rules as needed
  parser: 'babel-eslint',
  env: {
    jest: true,
    node: true,
    browser: true,
    es6: true,
  },
};
