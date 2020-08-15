module.exports = function (api) {
  api.assertVersion(7);
  api.cache.forever();

  const presets = ['@adeira/babel-preset-adeira'];

  return {
    presets,
  };
};
