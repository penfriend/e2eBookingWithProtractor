# Using Grid with running parallel testing on different browser types with different specs

## Prerequisites
1. NODE version >=8.9.1
2. Git

## Install
```
npm install
```

## Run tests
1. You need to open the three terminals in the folder *grid*:
   - 1.1 In the first terminal type command: ```.\prepare_grid.bat``` and then you need to type another command ```.\hub.bat```
   - 1.2 In the second terminal type command:  ```.\node_1.bat```
   - 1.3 In the third terminal type command:  ```.\node_2.bat```
2. To run tests in the fourth terminal in the folder *e2eBookingWithProtractor* type command: ```npm run test```

## Open grid console
```
http://localhost:4444/grid/console
```