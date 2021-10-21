/* const mainModule = require('./index'); 
const fs = require('fs');
const path = require('path');
let pathSupplied = process.argv[2];
let extFilter = process.argv[3];

let text = /\[([^\]]+)\]\(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9(@:%_\+.~#?&//=]*)/g;
let re = new RegExp(text);

mainModule(pathSupplied, extFilter, (err, filteredList) => {
    if(err) return console.error(err);
    filteredList.forEach(file => {
        console.log(file);
         fs.readFile(file, 'utf8' , (err, data) => {
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
         //console.log(result)
           console.log ({
            'dir': path,   
            'url': result[1]
            //'text':result [0]
          })  
        })
      }); 
    })


}) */
