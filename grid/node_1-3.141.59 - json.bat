:: Beginning of hub batch file
set SERVER_VERSION=3.141.59
set REGISTER_IP=localhost:4444
set CHROME_DRIVER=.\webdrivers\chromedriver_88.0.4324.96.exe
set NODE_CONFIG=node_1-config.json

java -Dwebdriver.chrome.driver=%CHROME_DRIVER% -jar selenium-server-standalone-%SERVER_VERSION%.jar -role node -hub http://%REGISTER_IP%/grid/register -nodeConfig %NODE_CONFIG%
:: End of hub batch file
pause