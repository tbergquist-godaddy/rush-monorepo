// @flow

const fs = require('fs');
const { DefaultReporter } = require('@jest/reporters');

class MyCustomReporter extends DefaultReporter {
  log(message: string) {
    process.stdout.write(message + '\n');
  }
}

module.exports = MyCustomReporter;
