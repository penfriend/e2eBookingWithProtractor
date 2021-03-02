const { Element } = require('./element');
const logger = require('../../config/logger.config');

class Input extends Element {
    getText() {
        return this.waitElementToBeClickable().then(() => this.get().getAttribute('value'));
    }
    sendKeys(value, element = this.get()) {
        return this.waitElementToBeClickable(element).then(() => {
            element.clear().sendKeys(value);
            logger.info(`${this.selectorName} was cleared and typed the text ${value}`);
        });
    }
}
module.exports = { Input }