const {LoginPage} = require ('../utils/pages/loginPage');
const { browser, protractor } = require('protractor');
const { When, Then, setDefaultTimeout } = require('cucumber');
const { expect } = require('chai');
const {expectedData} = require('../utils/expectedData')
const loginPage = new LoginPage();
setDefaultTimeout(60000);

When(/^I go to login page using account menu drop down$/, async () => {
    await browser.driver.manage().deleteAllCookies(); 
    return loginPage.accountMenuDropDown.clickActiveItem();        
});

When(/^I login with username and password$/, async () => {
    await loginPage.login.sendKeys(browser.params.CREDENTIALS.email);
    await loginPage.password.sendKeys(browser.params.CREDENTIALS.password);
    return loginPage.loginButton.click();        
});

Then(/^I am on the page with (.*)$/,  async (url) => {
    await browser.wait(protractor.ExpectedConditions.urlContains(expectedData[url]));
    return expect(await browser.getCurrentUrl()).to.contain(expectedData[url]);
});

