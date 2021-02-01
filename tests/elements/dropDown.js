const { Element } = require('./element');

class DropDown extends Element {
    getActiveItem() {
        return this.get().$('[class*="dropdown-item active"]');
    }

    clickActiveItem() {
        return this.click().then(()=> this.click(this.getActiveItem()))
    }
}
module.exports = { DropDown };