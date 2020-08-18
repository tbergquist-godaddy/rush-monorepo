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

  onTestFileResult(
    test /*: Object  */,
    testResult /*: Object  */,
    aggregatedResult /*: Object  */,
  ) {
    const status = testResult.numFailingTests === 0 ? 'Passed' : 'Failed';
    const runtime = Number(testResult.perfStats.runtime / 1000).toPrecision(2);
    this.log(`${status}: ${testResult.testFilePath}  - ${runtime}s`);
  }

  onTestFileStart(test/*: Object  */) {
    this.log(`Runs: ${test.path}`);
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
