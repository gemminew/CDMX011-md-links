
const fs = require('fs');
const path = require('path');
const http = require('http');
const files = require('./mdlinks-modules/readFile');
const directories = require ('./mdlinks-modules/readDirectory');
const validate = require('./mdlinks-modules/validate.js');
const stats = require('./mdlinks-modules/stats.js');

let pathSupplied = process.argv[2];
let extFilter = process.argv[3];
//const validateM = (validate.validationFormatter(validate.getValidation(files.filterLinks(directories.directory(path)))))

const validateM = (validate.validationFormatter(validate.getValidation(files.filterLinks(directories.directory(pathSupplied)))))
const statsM = (stats.getStats(validate.getValidation(files.filterLinks(directories.directory(pathSupplied)))))
const validatedStatsM = (stats.stats(validate.getValidation(files.filterLinks(directories.directory(pathSupplied)))))

function mdLinks (path, options){

    return new Promise((resolve, reject)=> {
            if(path && options.s){
                if(options.v)
                    resolve(validatedStatsM)
                else
                    resolve(statsM)
            } else if(path && options.v){
                resolve(validateM)
                //resolve(stats.getStats(validate.getValidation(files.filterLinks(directories.directory(path)))))
            } else{
                reject('error')
            }
     })
 }



 
 exports.mdLinks = mdLinks;  