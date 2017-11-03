var fs = require('fs')
var bufferObject = fs.readFileSync(process.argv[2]);
var bufferString = bufferObject.toString();
var splitArray = bufferString.split('\n');
console.log(splitArray.length-1);