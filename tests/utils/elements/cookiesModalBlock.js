const { Element } = require('./element');
const logger = require('../../config/logger.config');

class CookiesModalBlock extends Element {
    getDismissButton() {
        return this.get().$('button.cc-dismiss');
    }

    dismiss() {
        return this.get().isDisplayed().then(isTrue => {
            if (isTrue) {
                logger.info(`Cookies Modal Block was dismissed`);
                return this.waitElementToBeClickable().then(() => {
                    return this.getDismissButton().click();
                })
            }
            else return isTrue;
        })
    }
}
module.exports = { CookiesModalBlock }