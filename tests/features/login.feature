@login
Feature: Login

  Scenario: Login with demouser credentials
    When I am on the main page
    When I go to login page using account menu drop down
    Then I am on the page with loginPageUrl
    When I login with username and password
    Then I am on the page with userPageUrl
    And On user page the title Hello should be demoUserPageTitle

 