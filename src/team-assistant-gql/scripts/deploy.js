const exec = require('child_process').execSync;
const fs = require('fs');
const path = require('path');

const execSync = (command) => {
  exec(command, { stdio: ['inherit', 'inherit', process.stdout] });
};
const deployPath = path.join(__dirname, '..', 'deploy');

if (fs.existsSync(deployPath)) {
  fs.rmdirSync(deployPath, { recursive: true });
}

fs.mkdirSync(deployPath);

execSync('rush deploy -p @tbergq/team-assistant-gql -t deploy');
execSync('heroku container:login');
execSync('heroku container:push web -a team-assistant-gql');
execSync('heroku container:release web -a team-assistant-gql');
