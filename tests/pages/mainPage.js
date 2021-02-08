const { browser } = require('protractor');
const { Element } = require('../elements/element');
const { Input } = require('../elements/input');
const { BasePage } = require('./basePage');

class MainPage extends BasePage {
    baseUrl = 'https://phptravels.net';
    toursMenuItem = new Element('a[href="#tours"]');
    destinationInput = new Input('#select2-drop > div:nth-child(1) > input');
    destinationSearchResult = new Element('.select2-results-dept-1 > .select2-result-label:nth-child(1)');
    destinationSearchResultText = new Element('[role="tabpanel"][id="tours"] [class*="hotelsearch locationlisttours"] > a');
    chooseTourTypeList = new Element('#tourtype_chosen > .chosen-single > span');
    chooseTourTypeItemFerry = new Element('#tourtype_chosen [data-option-array-index="4"]');
    dateInput = new Input('#tours #DateTours');
    addAdultButton = new Element('#tours input[name="adults"] ~ .input-group-btn-vertical > button[class*="bootstrap-touchspin-up"]');
    searchButton = new Element('#tours button[type="submit"]');

    navigate() {
        browser.get(this.baseUrl);
    }
    enabletoSetValueToDestinationInput(){
        const linkToEnableDestinationInput = new Element('#s2id_autogen22 > a');
        return linkToEnableDestinationInput.click();
    }
}
module.exports = { MainPage }