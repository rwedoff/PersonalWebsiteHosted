var fs = require("fs");

var data = fs.readFileSync('stops.json');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");