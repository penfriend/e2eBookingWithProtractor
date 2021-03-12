@booking_tour
Feature: Search and booking the Tour

Background: Login and navigate to the main page
    Given I am on the main page
    When I go to login page using account menu drop down
    When I login with username and password
    When I am on the main page

Scenario Outline: Big Bus Tour Of Dubai
    When I click tours menu item in the main page
    Then The tours menu item is active in the main page
    When I enter the tourDestination into the destination field in the main page
    Then The tourDestination is in the destination field in the main page
    When I choose the tourType in the tour type dropdown in the main page
    Then The tourType is in the tour type dropdown in the main page
    When I enter the tourDate into the date field in the main page
    Then The tourDate is in the date field in the main page
    When I click the addAdultButton in the main page
    When I click the searchButton in the main page

    When The cookies modal block is presented I dismiss it in the BigBusTour page
    When I scroll to the bookTourButton in the BigBusTour page
    When I click the button with the name bookTourButton in the BigBusTour page
    When I enter <firstnameForm> into the firstnameFormBookTour in the tourBookingForm in the BigBusTour page
    Then The <firstnameForm> is in the firstnameFormBookTour field in the tourBookingForm in the BigBusTour page
    When I enter <emailForm> into the emailFormBookTour in the tourBookingForm in the BigBusTour page
    Then The <emailForm> is in the emailFormBookTour field in the tourBookingForm in the BigBusTour page
    When I enter <phoneForm> into the phoneFormBookTour in the tourBookingForm in the BigBusTour page
    Then The <phoneForm> is in the phoneFormBookTour field in the tourBookingForm in the BigBusTour page
    When I enter <addressForm> into the addressFormBookTour in the tourBookingForm in the BigBusTour page
    Then The <addressForm> is in the addressFormBookTour field in the tourBookingForm in the BigBusTour page
    When I click the confirm button in the tourBookingForm in the BigBusTour page

    Examples:
      | firstnameForm          | emailForm          | phoneForm          | addressForm          |  
      | firstnameFormBookTour1 | emailFormBookTour1 | phoneFormBookTour1 | addressFormBookTour1 | 
      | firstnameFormBookTour2 | emailFormBookTour2 | phoneFormBookTour2 | addressFormBookTour2 | 
