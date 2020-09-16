// @flow

/**
 * Because of rushs' approach of symlinking dependencies to each workspace,
 * the sub-dependencies of of babel-preset will not be linked where needed.
 * We need to install those directly in each package 😩
 */
const { execSync } = require('child_process');
const path = require('path');

// TODO: Get from package.json instead 🤔
const deps = [
  '@adeira/babel-preset-adeira',
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-numeric-separator',
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-transform-flow-strip-types',
  '@babel/plugin-transform-runtime',
  '@babel/preset-env',
  '@babel/preset-react',
];

const dir = process.argv[2];

if (dir == null) {
  throw new Error('directory is mandatory.');
}

for (const dep of deps) {
  execSync(`rush add -p ${dep} --dev --caret`, {
    cwd: path.join(__dirname, '..', dir),
    stdio: 'inherit',
  });
}
