const { Element } = require('./element');
const logger = require('../../config/logger.config');

class DropDown extends Element {
    getActiveItem() {
        return this.get().$('[class*="dropdown-item active"]');
    }

    clickActiveItem() {
        logger.info(`Clicking the dropdown active item ${this.selectorName}`);
        return this.click().then(()=> this.click(this.getActiveItem()))
    }
}
module.exports = { DropDown };