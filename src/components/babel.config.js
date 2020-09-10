// @flow

const { Command } = require('commander');

const program = new Command();

program.option('--out-file-extension <type>', 'out extension').allowUnknownOption();
program.parse(process.argv);

module.exports = function (api /*: Object */) /*: Object  */ {
  api.assertVersion(7);
  api.cache.forever();

  let target = 'js';

  if (program.outFileExtension === '.mjs') {
    target = 'js-esm';
  } else if (program.outFileExtension === '.js.flow') {
    target = 'flow';
  }

  const presets = [['@adeira/babel-preset-adeira', { target }]];

  return {
    presets,
  };
};
