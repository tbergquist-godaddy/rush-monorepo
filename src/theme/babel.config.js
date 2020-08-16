module.exports = function (api) {
  api.assertVersion(7);
  api.cache.forever();

  const outfileExtension =
    process.argv[process.argv.findIndex((i) => i === '--out-file-extension') + 1];

  let target = 'js';

  if (outfileExtension === '.mjs') {
    target = 'js-esm';
  } else if (outfileExtension === '.js.flow') {
    target = 'flow';
  }

  const presets = [['@adeira/babel-preset-adeira', { target }]];

  return {
    presets,
  };
};
