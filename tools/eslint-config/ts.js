// @flow

const config = require('./');

const OFF = 0;

const tsConfig = {
  ...config,
  rules: {
    ...config.rules,
    'node/file-extension-in-import': [
      'error',
      'never',
      {
        tryExtensions: ['.js', '.json', '.ts'],
      },
    ],
  },
};

for (const key of Object.keys(tsConfig.rules)) {
  if (key.startsWith('flowtype')) {
    tsConfig.rules[key] = OFF;
  }
}

module.exports = tsConfig;
