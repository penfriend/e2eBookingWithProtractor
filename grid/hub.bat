@echo off
for /f "tokens=*" %%a in ('dir ..\node_modules\protractor\node_modules\webdriver-manager\selenium\selenium-server-standalone*.jar /b /s') do set SELENIUM-SERVER=%%a
@echo on
java -jar %SELENIUM-SERVER% -role hub