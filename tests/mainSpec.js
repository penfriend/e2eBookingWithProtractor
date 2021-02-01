// const { browser, $ } = require('protractor');
const { BigBusTourPage } = require('./pages/bigBusTourPage');
const { DemoUserPage } = require('./pages/demoUserPage');
const { LoginPage } = require('./pages/loginPage');
const { MainPage } = require('./pages/mainPage');

describe('e2e logining, searching and booking tour test', () => {
    const mainPage = new MainPage();
    const loginPage = new LoginPage();
    const bigBusTourPage = new BigBusTourPage();
    const demoUserPage = new DemoUserPage();

    it('check login', async () => {
        await mainPage.navigate();
        await mainPage.accountMenuDropDown.clickActiveItem();        
        await expect(loginPage.getCurrentUrl()).toContain('/login');
        await loginPage.login.sendKeys(browser.params.CREDENTIALS.email);
        await loginPage.password.sendKeys(browser.params.CREDENTIALS.password);
        await loginPage.loginButton.click();
        await expect(demoUserPage.titleHello.getText()).toContain("Hi, Demo User");
    })
    it('check the search for the tour', async () => {
        await mainPage.navigate();
        await mainPage.toursMenuItem.click();
        await expect(mainPage.toursMenuItem.get().getAttribute('class')).toContain('active');
        await mainPage.destinationInput.sendKeys('Big Bus Tour Of Dubai');
        await mainPage.destinationSearchResult.click();
        await expect(mainPage.destinationSearchResultText.getText()).toEqual('Big Bus Tour Of Dubai');
        await mainPage.chooseTourTypeList.click();
        await mainPage.chooseTourTypeItemFerry.click();
        await expect(mainPage.chooseTourTypeList.getText()).toEqual('Ferry');
        await mainPage.dateInput.sendKeys('06.05.2021');
        await expect(mainPage.dateInput.getAttribute('value')).toEqual('06.05.2021');
        await mainPage.addAdultButton.click();
        await mainPage.searchButton.click();
    })
    it('check the booking of the tour', async () => {
        await bigBusTourPage.cookiesModalBlock.dismiss();
        await bigBusTourPage.bookTourButton.moveToElement();
        await bigBusTourPage.bookTourButton.click();
        await bigBusTourPage.tourBookingForm.firstnameFormBookTour.sendKeys('Diana');
        await expect(bigBusTourPage.tourBookingForm.firstnameFormBookTour.getAttribute('value')).toEqual('Diana');
        await bigBusTourPage.tourBookingForm.emailFormBookTour.sendKeys('dianapenfriend@yahoo.com');
        await expect(bigBusTourPage.tourBookingForm.emailFormBookTour.getAttribute('value')).toEqual('dianapenfriend@yahoo.com');
        await bigBusTourPage.tourBookingForm.phoneFormBookTour.sendKeys('+380501234567');
        await expect(bigBusTourPage.tourBookingForm.phoneFormBookTour.getAttribute('value')).toEqual('+380501234567');
        await bigBusTourPage.tourBookingForm.addressFormBookTour.sendKeys('Kiev');
        await expect(bigBusTourPage.tourBookingForm.addressFormBookTour.getAttribute('value')).toEqual('Kiev');
        await bigBusTourPage.tourBookingForm.buttonOkFormBookTour.click();
    })
})
