@echo off
mkdir webdrivers-and-server
node ..\node_modules\protractor\bin\webdriver-manager update
copy ..\node_modules\protractor\node_modules\webdriver-manager\selenium\chromedriver*.exe .\webdrivers-and-server
copy ..\node_modules\protractor\node_modules\webdriver-manager\selenium\geckodriver*.exe .\webdrivers-and-server
copy ..\node_modules\protractor\node_modules\webdriver-manager\selenium\selenium-server-standalone*.jar .\webdrivers-and-server
