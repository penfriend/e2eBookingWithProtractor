const { BigBusTourPage } = require('../utils/pages/bigBusTourPage');
const { DemoUserPage } = require('../utils/pages/demoUserPage');
const { LoginPage } = require('../utils/pages/loginPage');
const { MainPage } = require('../utils/pages/mainPage');
const {expectedData} = require('../utils/expectedData');

const mainPage = new MainPage();
const loginPage = new LoginPage();
const bigBusTourPage = new BigBusTourPage();
const demoUserPage = new DemoUserPage();

describe('e2e logining, searching and booking tour test', () => {
    it('check login', async () => {
        await mainPage.navigate();
        await mainPage.accountMenuDropDown.clickActiveItem();        
        await expect(loginPage.getCurrentUrl()).toContain(expectedData.loginPageUrl);
        await loginPage.login.sendKeys(browser.params.CREDENTIALS.email);
        await loginPage.password.sendKeys(browser.params.CREDENTIALS.password);
        await loginPage.loginButton.click();
        await expect(demoUserPage.titleHello.getText()).toContain(expectedData.demoUserPageTitle);
    })
    it('check the search for the tour', async () => {
        await mainPage.navigate();
        await mainPage.toursMenuItem.click();
        await expect(await mainPage.toursMenuItem.get().getAttribute('class')).toContain('active');
        await mainPage.enabletoSetValueToDestinationInput();
        await mainPage.destinationInput.sendKeys(expectedData.tourDestination);
        await mainPage.destinationSearchResult.click();
        await expect(await mainPage.destinationSearchResultText.getText()).toEqual(expectedData.tourDestination);
        await mainPage.chooseTourTypeList.click();
        await mainPage.chooseTourTypeItemFerry.click();
        await expect(await mainPage.chooseTourTypeList.getText()).toEqual(expectedData.tourType);
        await mainPage.dateInput.sendKeys(expectedData.tourDate);
        await expect(await mainPage.dateInput.getAttribute('value')).toEqual(expectedData.tourDate);
        await mainPage.addAdultButton.click();
        await mainPage.searchButton.click();
    })
    it('check the booking of the tour', async () => {
        await bigBusTourPage.cookiesModalBlock.dismiss();
        await bigBusTourPage.bookTourButton.moveToElement(); 
        await bigBusTourPage.bookTourButton.click();
        await bigBusTourPage.tourBookingForm.firstnameFormBookTour.sendKeys(expectedData.firstnameFormBookTour);
        await expect(bigBusTourPage.tourBookingForm.firstnameFormBookTour.getAttribute('value')).toEqual(expectedData.firstnameFormBookTour);
        await bigBusTourPage.tourBookingForm.emailFormBookTour.sendKeys(expectedData.emailFormBookTour);
        await expect(bigBusTourPage.tourBookingForm.emailFormBookTour.getAttribute('value')).toEqual(expectedData.emailFormBookTour);
        await bigBusTourPage.tourBookingForm.phoneFormBookTour.sendKeys(expectedData.phoneFormBookTour);
        await expect(bigBusTourPage.tourBookingForm.phoneFormBookTour.getAttribute('value')).toEqual(expectedData.phoneFormBookTour);
        await bigBusTourPage.tourBookingForm.addressFormBookTour.sendKeys(expectedData.addressFormBookTour);
        await expect(bigBusTourPage.tourBookingForm.addressFormBookTour.getAttribute('value')).toEqual(expectedData.addressFormBookTour);
        await bigBusTourPage.tourBookingForm.buttonOkFormBookTour.click();
    })
})
