// @flow

const fs = require('fs');

class MyCustomReporter {
  _globalConfig /*: Object  */;
  _options /*: {outputFilePath: string} */;
  constructor(globalConfig /*: Object  */, options /*: {outputFilePath: string} */) {
    this._globalConfig = globalConfig;
    this._options = options;
  }

  log(message /*: string */) /*: void */ {
    process.stdout.write(`${message}\n`);
  }

  onRunComplete(contexts /*: Object */, results /*: Object */) {
    this.log(`
    passed: ${results.numPassedTests}
    failed: ${results.numFailedTests}
    `);
    fs.writeFileSync(this._options.outputFilePath, JSON.stringify(results, null, 2));
  }
}

module.exports = MyCustomReporter;
