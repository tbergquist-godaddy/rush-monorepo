// @flow

module.exports = {
  root: true,

  extends: ['@adeira/eslint-config'],

  // adjust the rules as needed
  parser: 'babel-eslint',
  env: {
    jest: true,
    node: true,
    browser: true,
    es6: true,
  },
};
