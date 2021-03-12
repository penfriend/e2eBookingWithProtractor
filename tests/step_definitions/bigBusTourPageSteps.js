const {BigBusTourPage} = require ('../utils/pages/bigBusTourPage');
const { When, Then, setDefaultTimeout } = require('cucumber');
const { expect } = require('chai');
const { expectedData } = require('../utils/expectedData');
const bigBusTourPage = new BigBusTourPage();
setDefaultTimeout(30000);

When(/^The cookies modal block is presented I dismiss it in the BigBusTour page$/, async () => {
    return await bigBusTourPage.cookiesModalBlock.dismiss();
});

When(/^I scroll to the (.*) in the BigBusTour page$/, async (bookTourButton) => {
    return bigBusTourPage[bookTourButton].moveToElement();
});

When(/^I click the button with the name (.*) in the BigBusTour page$/, async (bookTourButton) => {
    return bigBusTourPage[bookTourButton].click();
});

When(/^I enter (.*) into the (.*) in the tourBookingForm in the BigBusTour page$/, async (expectedFieldInFormBookTour,fieldInFormBookTour) => {
    return bigBusTourPage.tourBookingForm[fieldInFormBookTour].sendKeys(expectedData[expectedFieldInFormBookTour]);
});

When(/^I click the confirm button in the tourBookingForm in the BigBusTour page$/, async () => {
    return bigBusTourPage.tourBookingForm.buttonOkFormBookTour.click();
});

Then(/^The (.*) is in the (.*) field in the tourBookingForm in the BigBusTour page$/, async (expectedfieldInFormBookTour,fieldInFormBookTour) => {
    return expect(await bigBusTourPage.tourBookingForm[fieldInFormBookTour].getAttribute('value')).to.equal(expectedData[expectedfieldInFormBookTour]);
});