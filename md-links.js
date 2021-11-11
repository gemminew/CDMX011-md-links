
const fs = require('fs');
const path = require('path');
const http = require('http');
const files = require('./mdlinks-modules/readFile');
const directories = require ('./mdlinks-modules/readDirectory');
const validate = require('./mdlinks-modules/validate.js');
const stats = require('./mdlinks-modules/stats.js');

//let pathSupplied = process.argv[2];

const validateM = pathSupplied => (validate.validationFormatter(validate.getValidation(files.filterLinks(directories.directory(pathSupplied)))))
const statsM = pathSupplied => (stats.getStats(validate.getValidation(files.filterLinks(directories.directory(pathSupplied)))))
const validatedStatsM = pathSupplied => (stats.stats(validate.getValidation(files.filterLinks(directories.directory(pathSupplied)))))

function mdLinks (path, options){

    return new Promise((resolve, reject)=> {
            if(path && options.s){
                if(options.v)
                    resolve(validatedStatsM(path))
                else
                    resolve(statsM(path))
            } else if(path && options.v){
                resolve(validateM(path))
                //resolve(stats.getStats(validate.getValidation(files.filterLinks(directories.directory(path)))))
            } else{
                reject('error')
            }
     })
 }



 
 exports.mdLinks = mdLinks;  