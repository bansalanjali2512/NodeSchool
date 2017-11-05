var fs = require('fs')
fs.readFile(process.argv[2], function callback (err, FileContents) {
    console.log(FileContents.toString().split('\n').length-1);
});
