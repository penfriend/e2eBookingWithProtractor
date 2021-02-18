const { $, protractor, browser } = require('protractor');

class Element {
    constructor(selector) {
        this._selector = $(selector);
    }

    get() {
        return this._selector;
    }

    waitElementToBeClickable(element = this.get()) {
        return browser.wait(protractor.ExpectedConditions.elementToBeClickable(element));
    }

    click(element = this.get()) {
        return this.waitElementToBeClickable(element).then(() => element.click())
    }

    getText(element = this.get()) {
        return this.waitElementToBeClickable(element).then(() => element.getText());
    }
    sendKeys(value, element = this.get()) {
        return this.waitElementToBeClickable(element).then(() => element.sendKeys(value));
    }
    getAttribute(value, element = this.get()){
        return this.waitElementToBeClickable(element).then(() => element.getAttribute(value));
    }
    moveToElement(element = this.get()){
        return browser.getCapabilities().then((cap) => {
           if(cap.map_.get('browserName') === 'firefox') {
               return browser.executeScript('arguments[0].scrollIntoView(false)',element);
           }
           if(cap.map_.get('browserName') === 'chrome'){
               return browser.driver.actions().mouseMove(element).perform();
           } 
        })
    }
}
module.exports = { Element }