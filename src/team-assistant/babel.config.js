// @flow

function isWebpack(caller) /*: boolean %checks */ {
  // https://github.com/babel/babel-loader
  return !!(caller && caller.name === 'babel-loader');
}

module.exports = function (api /*: Object */) /*: Object  */ {
  api.assertVersion(7);

  const presets = [
    ['@adeira/babel-preset-adeira', { target: api.caller(isWebpack) ? 'js-esm' : 'js' }],
  ];

  return {
    presets,
    plugins: [
      ['babel-plugin-fbt', { extraOptions: { __self: true } }],
      'babel-plugin-fbt-runtime',
      '@babel/plugin-syntax-dynamic-import',
    ],
  };
};
