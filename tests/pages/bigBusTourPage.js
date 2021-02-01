const { Element } = require('../elements/element');
const { Input } = require('../elements/input');
const { BasePage } = require('./basePage');

class BigBusTourPage extends BasePage {
    bookTourButton = new Element(':nth-child(4) > :nth-child(6) > .btn');
    tourBookingForm = { 
        firstnameFormBookTour: new Input('#send_enquery input[name="firstname"]'),
        emailFormBookTour: new Input('#send_enquery input[name="email"]'),
        phoneFormBookTour: new Input('#send_enquery input[name="phone"]'),
        addressFormBookTour: new Input('#send_enquery input[name="address"]'),
        buttonOkFormBookTour: new Element('#send_enquery #ClickMyButton')
    };
}
module.exports = { BigBusTourPage }