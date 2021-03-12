const {DemoUserPage} = require ('../utils/pages/demoUserPage');
const { Then, setDefaultTimeout } = require('cucumber');
const { expect } = require('chai');
const { expectedData } = require('../utils/expectedData');
const demoUserPage = new DemoUserPage();
setDefaultTimeout(30000);

Then(/^On user page the title Hello should be (.*)$/,  async (demoUserPageTitle) => {
    return expect(await demoUserPage.titleHello.getText()).to.contain(expectedData[demoUserPageTitle]);
});