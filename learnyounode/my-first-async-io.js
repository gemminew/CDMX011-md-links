const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, string) => {
    if(err) return console.error(err);
    const file = string.split('\n').length-1;
    console.log(file);
})