const { Element } = require('../elements/element');
const { BasePage } = require('./basePage');

class LoginPage extends BasePage {
    login = new Element('input[name="username"]');
    password = new Element ('input[name="password"]');
    loginButton = new Element ('#loginfrm > .btn-primary[type="submit"]');

}
module.exports = { LoginPage }