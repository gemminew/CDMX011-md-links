//import  {getHttpCodes} from './http-module.mjs';

const fs = require('fs');
const path = require('path');
const getValidation = require('./validate').getValidation;
let pathSupplied = process.argv[2];
//let extFilter = process.argv[3];

let text = /\[([^\]]+)\]\(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9(@:%_\+.~#?&//=]*)/g;
let re = new RegExp(text);


function filterLinks (paths) {
  let linksMD = [];
  console.log('filterLinks...');
  //const file = fs.readFileSync(fileMD, 'utf8')
  console.log(JSON.stringify(paths));

    paths.forEach((filename) => {
      data = fs.readFileSync(path.resolve(filename), 'utf8') //, (err, data) => {
        let urls = [];
      if (!data) {
        console.error('could not read file');
        //return
      } else  {
        urls = data.match(re);   
        //console.log(urls)
      }

      const splitRegex = urls.forEach((url) => {
        url = url.slice(1);;
        const result = url.split('](');
        if(result[0].length >= 50) {
          result[0] = result[0].substr(0, 49);
        }
//        console.log(JSON.stringify(responses));
        linksMD.push({
          'file': path.resolve(filename),  
          'url': result[1],
          'text':result [0], 
          'status': 100,
          'message': 'PENDING',
        }); 
      });
    //});
    
  }); //end paths.forEach
  return linksMD;
}

//filterLinks(pathSupplied);

 exports.filterLinks = filterLinks;