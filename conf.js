exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    SELENIUM_PROMISE_MANAGER: false,
    specs: ['spec.js'],
    onPrepare(){
      const { browser,protractor } = require('protractor');
      const {cfDecodeEmail} = require('./init');
      const axios = require('axios');
      global.expectElementToBeClickable = (...args) => protractor.ExpectedConditions.elementToBeClickable(...args);
      browser.params.CREDENTIALS = {};
      browser.driver.manage().timeouts().implicitlyWait(10000);
      axios.get("https://phptravels.com/demo/").then(response => {
        let credo = response.data.match(/Email[\dA-Z\s\"\<\>\/\#\&\_\"\=\-\[;\]]*user/gi)[0];
        browser.params.CREDENTIALS.email = cfDecodeEmail(credo.match(/[a-z\d]{25,}/g) + '');
        browser.params.CREDENTIALS.password = credo.match(/Password[\<,\/,\>a-z]*\s{1}[a-z\d]*/gi)[0].split(' ')[1];
        console.log('CREDENTIALS.email=', browser.params.CREDENTIALS.email)
        console.log('CREDENTIALS.password=', browser.params.CREDENTIALS.password)
    });
    browser.waitForAngularEnabled(false);
    }
  }