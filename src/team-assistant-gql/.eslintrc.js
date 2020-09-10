module.exports = {
  root: true,
  extends: ['@tbergq/eslint-config/ts', 'plugin:import/typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  env: {
    jest: true,
    node: true,
  },
};
