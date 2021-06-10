var readlineSync = require('readline-sync');
var username = readlineSync.question('Enter name: ');

var welcomeMsg = 'Welcome ';
console.log(welcomeMsg + username);