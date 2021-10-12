//import  {getHttpCodes} from './http-module.mjs';

const fs = require('fs');
const path = require('path');
const http = require('http');
//const element = require('./readdir-module.js');

let pathSupplied = process.argv[2];
let extFilter = process.argv[3];

//filterMDFile(pathSupplied);

let text = /\[([^\]]+)\]\(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9(@:%_\+.~#?&//=]*)/g;
let re = new RegExp(text);
// /\[.*?\]/g; 
 
  fs.readFile(pathSupplied, 'utf8' , (err, data) => {
    let urls = [];
    if (err) {
      console.error(err)
      //return
    } else  {
      urls = data.match(re);   
      //console.log(urls)
    }
    const splitRegex = urls.forEach((url) => {
      url = url.substring(0, url.length - 1).slice(1);;
      const result = url.split('](');
      if(result[0] >= 50) {
        result[0] = result[0].substr(0, 49);
    }
      //console.log(result)
       console.log ({
        'url': result[1],
        'text':result [0]
      })  
    })
  });

 

//module.exports 