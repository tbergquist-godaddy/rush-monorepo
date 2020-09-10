// @flow

const ERROR = 2;

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
  rules: {
    'import/no-extraneous-dependencies': [
      ERROR,
      {
        devDependencies: ['babel.config.js'],
      },
    ],
  },
};
