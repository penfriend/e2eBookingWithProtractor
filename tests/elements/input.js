const { Element } = require('./element');

class Input extends Element {
    getText() {
        return this.waitElementToBeClickable().then(() => this.get().getAttribute('value'));
    }
    sendKeys(value, element = this.get()) {
        return this.waitElementToBeClickable(element).then(() => element.clear().sendKeys(value));
    }
}
module.exports = { Input }