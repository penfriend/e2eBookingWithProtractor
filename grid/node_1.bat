:: Beginning of node batch file
@echo off
for /f "tokens=*" %%a in ('dir .\webdrivers-and-server\selenium-server-standalone*.jar /b /s') do set SELENIUM-SERVER=%%a
for /f "tokens=*" %%b in ('dir .\webdrivers-and-server\chromedriver*.exe /b /s') do set CHROME_DRIVER=%%b
for /f "tokens=*" %%c in ('dir .\webdrivers-and-server\geckodriver*.exe /b /s') do set GECKO_DRIVER=%%c
@echo on
set REGISTER_IP=localhost:4444
set NODE_CONFIG=node_1-config.json

java -Dwebdriver.gecko.driver=%GECKO_DRIVER% -Dwebdriver.chrome.driver=%CHROME_DRIVER% -jar %SELENIUM-SERVER% -role node -hub http://%REGISTER_IP%/grid/register -nodeConfig %NODE_CONFIG%
:: End of node batch file
pause