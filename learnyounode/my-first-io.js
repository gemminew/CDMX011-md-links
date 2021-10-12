const fs = require('fs');
const read = fs.readFileSync(process.argv[2]);

const str = read.toString().split('\n').length-1;

console.log(read.toString());
