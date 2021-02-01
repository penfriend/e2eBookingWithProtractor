const { Element } = require('./element');

class CookiesModalBlock extends Element {
    getDismissButton() {
        return this.get().$('button.cc-dismiss');
    }

    dismiss() {
        return this.get().isPresent().then(isTrue => {
            if (isTrue) {
                return this.waitElementToBeClickable().then(() => {
                    return this.getDismissButton().click();
                })
            }
            else return isTrue;
        })
    }
}
module.exports = { CookiesModalBlock }