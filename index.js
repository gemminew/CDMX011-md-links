const fs = require('fs');
const path = require('path');

const EXTENSION = '.md';

var pathSupplied = process.argv[2];
var extFilter = process.argv[3];

var expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9(@:%_\+.~#?&//=]*)/g;
var regex = new RegExp(expression);

fs.readFile(pathSupplied, 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  } else  {
    //console.log(data.match(regex2));
    console.log(data.match(regex))
  }
});


//module.exports = () => {
  // ...
//};


// function extension(element) {
/* var extName = path.extname(element);
return extName === '.md' + extFilter; 
};

fs.readdir(pathSupplied, function(err, list) {
list.filter(extension).forEach(function(value) {
  console.log(value);
  });
});
 */