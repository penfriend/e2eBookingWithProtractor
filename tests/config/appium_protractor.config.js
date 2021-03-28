const yargs = require('yargs').argv;

exports.config = {

    seleniumAddress: 'http://localhost:4723/wd/hub',
    framework: 'jasmine',
    SELENIUM_PROMISE_MANAGER: false,
    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 30000
    },
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
          w3c: false,
        },
        platformName: 'Android',
        deviceName: 'myDevice'
    },
  
    specs: [
      '../specs/mainSpec.js'
    ],
  
    onPrepare(){
        const { browser } = require('protractor');
        const {cfDecodeEmail} = require('./init');
        const axios = require('axios');
        browser.params.CREDENTIALS = {};
        browser.driver.manage().timeouts().implicitlyWait(10000);
        axios.get("https://phptravels.com/demo/").then(response => {
          let credo = response.data.match(/Email[\dA-Z\s\"\<\>\/\#\&\_\"\=\-\[;\]]*user/gi)[0];
          browser.params.CREDENTIALS.email = yargs.email || cfDecodeEmail(credo.match(/[a-z\d]{25,}/g) + '');
          browser.params.CREDENTIALS.password = yargs.password || credo.match(/Password[\<,\/,\>a-z]*\s{1}[a-z\d]*/gi)[0].split(' ')[1];
      });
      browser.waitForAngularEnabled(false);
    }
  }
  