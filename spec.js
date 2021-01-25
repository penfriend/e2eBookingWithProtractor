const axios = require('axios');
const { ExpectedConditions, browser } = require('protractor');

function cfDecodeEmail(encodedString) {
    let email = "", r = parseInt(encodedString.substr(0, 2), 16), n, i;
    for (n = 2; encodedString.length - n; n += 2) {
        i = parseInt(encodedString.substr(n, 2), 16) ^ r;
        email += String.fromCharCode(i);
    }
    return email;
}
describe('e2e booking and payment by card test', () => {
    const CREDENTIALS = {};
    beforeAll(async () => {
        await axios.get("https://phptravels.com/demo/").then(response => {
            let credo = response.data.match(/Email[\dA-Z\s\"\<\>\/\#\&\_\"\=\-\[;\]]*user/gi)[0];
            CREDENTIALS.email = cfDecodeEmail(credo.match(/[a-z\d]{25,}/g) + '');
            CREDENTIALS.password = credo.match(/Password[\<,\/,\>a-z]*\s{1}[a-z\d]*/gi)[0].split(' ')[1];
            console.log('CREDENTIALS.email=', CREDENTIALS.email)
            console.log('CREDENTIALS.password=', CREDENTIALS.password)

        });
        browser.waitForAngularEnabled(false);
    });

    it('check login', async () => {
        // browser.ignoreSynchronization = true;
        await browser.get('https://phptravels.net');
        let accountMenuItem = element(by.css(':nth-child(3) > .dropdown > #dropdownCurrency'));
        let accountMenuDropdown = element(by.css('.dropdown-menu > div > .active'));
        let login = element(by.css(':nth-child(1) > .pure-material-textfield-outlined > input'));
        let password = element(by.css(':nth-child(2) > .pure-material-textfield-outlined > input'));
        await browser.wait(protractor.ExpectedConditions.presenceOf(accountMenuItem, 10000));
        await accountMenuItem.click();
        await browser.wait(protractor.ExpectedConditions.presenceOf(accountMenuDropdown, 10000));
        await accountMenuDropdown.click();
        await expect(browser.getCurrentUrl()).toContain('/login');
        await browser.wait(protractor.ExpectedConditions.presenceOf(login, 10000));
        await browser.wait(protractor.ExpectedConditions.presenceOf(password, 10000));
        await login.sendKeys(CREDENTIALS.email);
        await password.sendKeys(CREDENTIALS.password);
        let loginButton = element(by.css('#loginfrm > .btn-primary'));
        await browser.wait(protractor.ExpectedConditions.presenceOf(loginButton, 10000));
        await loginButton.click();
        let titleHello = element(by.css('.text-align-left'));
        await browser.wait(protractor.ExpectedConditions.presenceOf(titleHello, 10000));
        await expect(titleHello.getText()).toContain("Hi, Demo User");
    })
    it('check the search for the tour', async () => {
        await browser.get('https://phptravels.net');
        let toursMenuItem = element(by.css('a[href="#tours"]'));
        await browser.wait(protractor.ExpectedConditions.presenceOf(toursMenuItem, 10000));
        await toursMenuItem.click();
        let destinationInput = element(by.id('s2id_autogen23'));
        await browser.wait(protractor.ExpectedConditions.presenceOf(destinationInput, 10000));
        await destinationInput.sendKeys('Big Bus Tour of Dubai');
        let destinationSearchResult = element(by.css('.select2-results-dept-1 > .select2-result-label'));
        await browser.wait(protractor.ExpectedConditions.presenceOf(destinationSearchResult, 10000));
        await destinationSearchResult.click();
        let chooseTourTypeList = element(by.css('#tourtype_chosen > .chosen-single > span'));
        await browser.wait(protractor.ExpectedConditions.presenceOf(chooseTourTypeList, 10000));
        await chooseTourTypeList.click();
        let chooseTourTypeItem4 = element(by.css('[data-option-array-index="4"]'));
        await browser.wait(protractor.ExpectedConditions.presenceOf(chooseTourTypeItem4, 10000));
        await chooseTourTypeItem4.click();
        let dateInput = element(by.css('#tours > .ftab-inner > .form-search-main-01 > form > .form-inner > .mb-20 > .col-lg-4 > :nth-child(1) > .gap-10 > .col-md-12 > .col-inner > .form-people-thread > .row > #airDatepickerRange-hotel > .form-group > .form-icon-left > #DateTours'));
        await browser.wait(protractor.ExpectedConditions.presenceOf(dateInput, 10000));
        await dateInput.sendKeys('06.05.2021');
        let addAdultButton = element(by.css('#tours > .ftab-inner > .form-search-main-01 > form > .form-inner > .mb-20 > .col-lg-4 > :nth-child(1) > .gap-10 > .col-md-12 > .col-inner > .form-people-thread > .row > :nth-child(2) > .form-group > .form-icon-left > .input-group > .input-group-btn-vertical > .bootstrap-touchspin-up'));
        await browser.wait(protractor.ExpectedConditions.presenceOf(addAdultButton, 10000));
        await addAdultButton.click();
        let searchButton = element(by.css('#tours > .ftab-inner > .form-search-main-01 > form > .form-inner > .mb-20 > .col-lg-2 > .btn'));
        await browser.wait(protractor.ExpectedConditions.presenceOf(searchButton, 10000));
        await searchButton.click();
    })
    it('check the booking of the tour', () => {
        // let destinationInput = element(by.id('s2id_autogen23'));
        // await browser.wait(protractor.ExpectedConditions.presenceOf(destinationInput, 10000));  
        // await destinationInput.sendKeys('Big Bus Tour of Dubai');
        // cy.get(':nth-child(4) > :nth-child(6) > .btn').scrollIntoView().click();
        // cy.get('.col-md-9 input[name="firstname"]').type('Diana');
        // cy.get('.col-md-9 input[name="email"]').type('dianapenfriend@yahoo.com');
        // cy.get('.col-md-9 input[name="phone"]').type('+380501234567');
        // cy.get('.col-md-9 input[name="address"]').type('Kiev');
        // cy.get('.col-md-9 #ClickMyButton').click();
    })

})
