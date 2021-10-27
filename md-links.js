
const fs = require('fs');
const path = require('path');
const http = require('http');
const files = require('./mdlinks-modules/readFile');
const directories = require ('./mdlinks-modules/readDirectory');
const validate = require('./mdlinks-modules/validate.js');
const stats = require('./mdlinks-modules/stats.js');

let pathSupplied = process.argv[2];
let extFilter = process.argv[3];

function mdLinks (path, options){
    return new Promise((resolve, reject)=> {
            if(path && options == '--validate'){
                resolve(validate.validationFormatter(validate.getValidation(files.filterLinks(directories.directory(path)))))
            } else if(path && options == '--stats'){
                resolve(stats.getStats(validate.getValidation(files.filterLinks(directories.directory(path)))))
            } else{
                reject('error')
            }
     })
 }

 
mdLinks(pathSupplied, extFilter)
.then(data => {
    console.log(typeof(data));
//    console.log(data);
    Promise.all(data).then(x => console.log(x));
    // data.forEach(link => {
    //     link.then(e => console.log(e));
    // });
})
.catch((err)=>{
    console.log(err)
});

 
 exports.mdLinks = mdLinks;  