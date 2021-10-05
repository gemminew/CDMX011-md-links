const fs = require('fs');
const path = require('path');

const EXTENSION = '.md';

var pathSupplied = process.argv[2];
var extFilter = process.argv[3];

var expression = /\[[-a-zA-Z0-9@:%._\+~#=]]\https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9(@:%_\+.~#?&//=]*)/g;
var regex = new RegExp(expression);
let text = /\[([^\]]+)\]\(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9(@:%_\+.~#?&//=]*)/g;
let re = new RegExp(text);
// /\[.*?\]/g;  

fs.readFile(pathSupplied, 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  } else  {
    console.log(data.match(text));
    //console.log(data.match(regex))

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