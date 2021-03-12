const path = require('path');
const yargs = require('yargs').argv;

exports.config = {
  allScriptsTimeout: 60000,
  getPageTimeout: 60000,
  specs: [path.resolve('./tests/features/**/*.feature')],
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    shardTestFiles: yargs.instances > 1,
    maxInstances: yargs.instances || 1,
    browserName: 'chrome',
    chromeOptions: {
      args: ['--no-sandbox', '--window-size=1920,1080']
    },
  },
  disableChecks: true,
  directConnect: true,
  SELENIUM_PROMISE_MANAGER: false,
  cucumberOpts: {
    require: [path.resolve('./tests/step_definitions/**/*.js')],
    ignoreUncaughtExceptions: true,
    format: [
     './node_modules/cucumber-pretty'],
    tags: yargs.tags || '@login or @booking_tour'
  },
  onPrepare: () => {
    const { browser } = require('protractor');
    const {cfDecodeEmail} = require('./init');
    const axios = require('axios');
    browser.params.CREDENTIALS = {};
    browser.driver.manage().timeouts().implicitlyWait(60000);
    axios.get("https://phptravels.com/demo/").then(response => {
      let credo = response.data.match(/Email[\dA-Z\s\"\<\>\/\#\&\_\"\=\-\[;\]]*user/gi)[0];
      browser.params.CREDENTIALS.email = yargs.email || cfDecodeEmail(credo.match(/[a-z\d]{25,}/g) + '');
      browser.params.CREDENTIALS.password = yargs.password || credo.match(/Password[\<,\/,\>a-z]*\s{1}[a-z\d]*/gi)[0].split(' ')[1];
    });
    return browser.waitForAngularEnabled(false);
  }
};
