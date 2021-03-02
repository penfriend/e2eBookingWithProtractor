const { Element } = require('../elements/element');
const { BasePage } = require('./basePage');

class DemoUserPage extends BasePage {
    titleHello = new Element('.text-align-left');
}
module.exports = { DemoUserPage }