exports.config = {
  multiCapabilities: [
    {
      browserName: 'chrome',
      specs: ['../specs/mainSpec.js'],
      chromeOptions: {
        w3c: false,
      }
    },
    {
      browserName: 'firefox',
      specs: ['../specs/mainSpecCopy.js'],
    }
  ],
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  SELENIUM_PROMISE_MANAGER: false,
  specs: [],
  onPrepare(){
    const { browser } = require('protractor');
    const {cfDecodeEmail} = require('./init');
    const axios = require('axios');
    browser.params.CREDENTIALS = {};
    browser.driver.manage().timeouts().implicitlyWait(10000);
    axios.get("https://phptravels.com/demo/").then(response => {
      let credo = response.data.match(/Email[\dA-Z\s\"\<\>\/\#\&\_\"\=\-\[;\]]*user/gi)[0];
      browser.params.CREDENTIALS.email = cfDecodeEmail(credo.match(/[a-z\d]{25,}/g) + '');
      browser.params.CREDENTIALS.password = credo.match(/Password[\<,\/,\>a-z]*\s{1}[a-z\d]*/gi)[0].split(' ')[1];
  });
  browser.waitForAngularEnabled(false);
  }
}