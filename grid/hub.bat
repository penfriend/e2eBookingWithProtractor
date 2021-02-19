@echo off
for /f "tokens=*" %%a in ('dir .\webdrivers-and-server\selenium-server-standalone*.jar /b /s') do set SELENIUM-SERVER=%%a
@echo on
java -jar %SELENIUM-SERVER% -role hub