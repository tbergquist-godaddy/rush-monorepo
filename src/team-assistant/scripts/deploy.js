// @flow

const exec = require('child_process').execSync;
const fs = require('fs');
const path = require('path');

const { ZEIT_TOKEN } = process.env;

if (ZEIT_TOKEN == null) {
  throw new Error('ZEIT_TOKEN missing.');
}
const execSync = (command) => {
  exec(command, { stdio: 'inherit' });
};

const deployPath = path.join(__dirname, '..', 'deploy', 'public');

if (fs.existsSync(deployPath)) {
  // $FlowExpectedError[extra-arg] This does allow a second arg
  fs.rmdirSync(deployPath, { recursive: true });
}

fs.mkdirSync(deployPath, { recursive: true });

execSync('cp -R dist/ deploy/public/');
execSync(`vercel deploy/ --confirm --prod --token=${ZEIT_TOKEN}`);
