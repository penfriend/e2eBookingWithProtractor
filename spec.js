const { browser, $ } = require('protractor');
describe('e2e booking and payment by card test', () => {
    it('check login', async () => {
        await browser.get('https://phptravels.net');
        let accountMenuItem = $(':nth-child(3) > .dropdown > #dropdownCurrency');
        let accountMenuDropdown = $('.dropdown-menu [href*="/login"]');
        let login = $('input[name="username"]');
        let password = $('input[name="password"]');
        await browser.wait(expectElementToBeClickable(accountMenuItem));
        await accountMenuItem.click();
        await browser.wait(expectElementToBeClickable(accountMenuDropdown));
        await accountMenuDropdown.click();
        await expect(browser.getCurrentUrl()).toContain('/login');
        await browser.wait(expectElementToBeClickable(login));
        await browser.wait(expectElementToBeClickable(password));
        await login.sendKeys(browser.params.CREDENTIALS.email);
        await password.sendKeys(browser.params.CREDENTIALS.password);
        let loginButton = $('#loginfrm > .btn-primary[type="submit"]');
        await browser.wait(expectElementToBeClickable(loginButton));
        await loginButton.click();
        let titleHello = $('.text-align-left');
        await browser.wait(expectElementToBeClickable(titleHello));
        await expect(titleHello.getText()).toContain("Hi, Demo User");
    })
    it('check the search for the tour', async () => {
        await browser.get('https://phptravels.net');
        let toursMenuItem = $('a[href="#tours"]');
        await browser.wait(expectElementToBeClickable(toursMenuItem));
        await toursMenuItem.click();
        let destinationInput = $('[role="tabpanel"][id="tours"] [class*="hotelsearch locationlisttours"] > input');
        await browser.wait(expectElementToBeClickable(destinationInput));
        await destinationInput.sendKeys('Big Bus Tour of Dubai');
        let destinationSearchResult = $('.select2-results-dept-1 > .select2-result-label');
        await browser.wait(expectElementToBeClickable(destinationSearchResult));
        await destinationSearchResult.click();
        let chooseTourTypeList = $('#tourtype_chosen > .chosen-single > span');
        await browser.wait(expectElementToBeClickable(chooseTourTypeList));
        await chooseTourTypeList.click();
        let chooseTourTypeItem4 = $('#tourtype_chosen [data-option-array-index="4"]');
        await browser.wait(expectElementToBeClickable(chooseTourTypeItem4));
        await chooseTourTypeItem4.click();
        let dateInput = $('#tours #DateTours');
        await browser.wait(expectElementToBeClickable(dateInput));
        await dateInput.sendKeys('06.05.2021');
        let addAdultButton = $('#tours input[name="adults"] ~ .input-group-btn-vertical > button[class*="bootstrap-touchspin-up"]');
        await browser.wait(expectElementToBeClickable(addAdultButton));
        await addAdultButton.click();
        let searchButton = $('#tours button[type="submit"]');
        await browser.wait(expectElementToBeClickable(searchButton));
        await searchButton.click();
    })
    it('check the booking of the tour', async () => {
        let bookTourButton = $(':nth-child(4) > :nth-child(6) > .btn');
        await browser.driver.actions().mouseMove(bookTourButton).perform();
        await browser.wait(expectElementToBeClickable($('#cookyGotItBtnBox')));
        if($('#cookyGotItBtnBox')){
            await $('#cookyGotItBtnBox button.cc-dismiss').click();
        }
        await bookTourButton.click();
        let firstnameFormBookTour = $('#send_enquery input[name="firstname"]'); 
        await browser.wait(expectElementToBeClickable(firstnameFormBookTour));  
        await firstnameFormBookTour.sendKeys('Diana');
        let emailFormBookTour = $('#send_enquery input[name="email"]'); 
        await browser.wait(expectElementToBeClickable(emailFormBookTour));  
        await emailFormBookTour.sendKeys('dianapenfriend@yahoo.com');
        let phoneFormBookTour = $('#send_enquery input[name="phone"]'); 
        await browser.wait(expectElementToBeClickable(phoneFormBookTour));  
        await phoneFormBookTour.sendKeys('+380501234567');
        let addressFormBookTour= $('#send_enquery input[name="address"]'); 
        await browser.wait(expectElementToBeClickable(addressFormBookTour));  
        await addressFormBookTour.sendKeys('Kiev');
        let buttonOkFormBookTour= $('#send_enquery #ClickMyButton'); 
        await browser.wait(expectElementToBeClickable(buttonOkFormBookTour));  
        await buttonOkFormBookTour.click();
    })

})
