
const fs = require('fs');
const path = require('path');
const http = require('http');
const files = require('./mdlinks-modules/readFile');
const directories = require ('./mdlinks-modules/readDirectory');
const validate = require('./mdlinks-modules/validate.js');

let pathSupplied = process.argv[2];
let extFilter = process.argv[3];

function mdLinks (path, options){
    return new Promise((resolve, reject)=> {
            if(path && options == '--validate'){
                resolve(validate.getValidation(files.filterLinks(directories.directory(path))))
            }else{
                reject('error')
            }
     })
 }

 
mdLinks(pathSupplied, extFilter)
.then(data => {
    data.forEach(link => {
        link.then(e => console.log(e));
    });
})
.catch((err)=>{
    console.log(err)
});

 
 exports.mdLinks = mdLinks;  