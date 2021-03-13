const { mainPage } =  require ('../utils/pages/mainPage') ;
const { When, Then, setDefaultTimeout } = require ('cucumber');
const { expect } = require('chai');
const { expectedData } = require('../utils/expectedData');

setDefaultTimeout(30000);

When(/^I am on the main page$/, async () => {
    return mainPage.navigate();
});

When(/^I click tours menu item in the main page$/,  async () => {
    return mainPage.toursMenuItem.click();
});

When(/^I enter the (.*) into the destination field in the main page$/,  async (tourDestination) => {
    await mainPage.enabletoSetValueToDestinationInput();
    await mainPage.destinationInput.sendKeys(expectedData[tourDestination]);
    return mainPage.destinationSearchResult.click();
});

When(/^I choose the tourType in the tour type dropdown in the main page$/,  async () => {
    await mainPage.chooseTourTypeList.click();
    return mainPage.chooseTourTypeItemFerry.click();
});

When(/I enter the (.*) into the date field in the main page$/,  async (tourDate) => {
    return mainPage.dateInput.sendKeys(expectedData[tourDate]);
});

When(/^I click the (.*) in the main page$/,  async (button) => {
    return mainPage[button].click();
});

Then(/^The tours menu item is active in the main page$/, async () => {
    return expect(await mainPage.toursMenuItem.get().getAttribute('class')).to.contain('active');
});

Then(/^The (.*) is in the destination field in the main page$/,  async (tourDestination) => {
return expect(await mainPage.destinationSearchResultText.getText()).to.equal(expectedData[tourDestination]);
});

Then(/^The (.*) is in the tour type dropdown in the main page$/,  async (tourType) => {
    return expect(await mainPage.chooseTourTypeList.getText()).to.equal(expectedData[tourType]);
});

Then(/^The (.*) is in the date field in the main page$/,  async (tourDate) => {
    return expect(await mainPage.dateInput.getAttribute('value')).to.equal(expectedData[tourDate]);
});
