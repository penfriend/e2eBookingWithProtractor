exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    SELENIUM_PROMISE_MANAGER: false,
    specs: ['spec.js']
  }