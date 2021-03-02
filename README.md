# Using Grid with running parallel testing on different browser types with different specs

## Prerequisites
1. NODE version >=8.9.1
2. Java version >=8

## Install
```
npm install
```

## Run tests using Grid
1. You need to open the three terminals in the folder *grid*:
   - 1.1 In the first terminal type command: ```.\hub.bat```
   - 1.2 In the second terminal type command:  ```.\node_1.bat```
   - 1.3 In the third terminal type command:  ```.\node_2.bat```
2. To run tests in the fourth terminal in the folder root project folder type command: ```npm run test```

## Run tests without using Grid
1. To run server before running test you need to open the terminal in the root project folder and type command: ```npm run start```
2. To run tests you need to open another terminal in the root project folder and type command: ```npm run test```
2.1 You can type specify your values of email and password for user to login by typing the command: 
```npm run test --email TypeUserEmail --password TypeUserPassword```

## Open grid console
```
http://localhost:4444/grid/console
```