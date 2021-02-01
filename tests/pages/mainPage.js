const { Element } = require('../elements/element');
const { Input } = require('../elements/input');
const { BasePage } = require('./basePage');

class MainPage extends BasePage {
    baseUrl = 'https://phptravels.net';
    toursMenuItem = new Element('a[href="#tours"]');
    destinationInput = new Input('[role="tabpanel"][id="tours"] [class*="hotelsearch locationlisttours"] > input');
    destinationSearchResult = new Element('.select2-results-dept-1 > .select2-result-label');
    destinationSearchResultText = new Element('[role="tabpanel"][id="tours"] [class*="hotelsearch locationlisttours"] > a');
    chooseTourTypeList = new Element('#tourtype_chosen > .chosen-single > span');
    chooseTourTypeItemFerry = new Element('#tourtype_chosen [data-option-array-index="4"]');
    dateInput = new Input('#tours #DateTours');
    addAdultButton = new Element('#tours input[name="adults"] ~ .input-group-btn-vertical > button[class*="bootstrap-touchspin-up"]');
    searchButton = new Element('#tours button[type="submit"]');

    navigate() {
        browser.get(this.baseUrl);
    }
}
module.exports = { MainPage }