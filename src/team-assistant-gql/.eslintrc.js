const ERROR = 2;

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
  rules: {
    'import/no-extraneous-dependencies': [
      ERROR,
      {
        devDependencies: ['scripts/setupTests.ts', '**/__tests__/**'],
      },
    ],
  },
};
