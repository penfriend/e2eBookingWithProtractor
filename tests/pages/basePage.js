const { DropDown } = require('../elements/dropDown');
const { CookiesModalBlock } = require('../elements/CookiesModalBlock');

class BasePage {
    constructor() {
        this._accountMenuDropDown = new DropDown('[class*="dropdown-login"]');
        this._cookiesModalBlock = new CookiesModalBlock('#cookyGotItBtnBox');
    }
    getCurrentUrl() {
        return browser.getCurrentUrl();
    }
    get accountMenuDropDown (){
        return this._accountMenuDropDown;
    }

    get cookiesModalBlock (){
        return this._cookiesModalBlock;
    }
    set accountMenuDropDown (value){
        this._accountMenuDropDown = value;
    }

    set cookiesModalBlock (value){
        this._cookiesModalBlock = value;
    }
}
module.exports = { BasePage }