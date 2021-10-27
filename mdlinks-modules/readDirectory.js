
const fs = require('fs');
const path = require('path');
//const  = require('./readFile.js');

const directory = (dir) => {
    let fileSeeking = [];
    if(path.extname(dir) == ".md") {
        return [dir];
    }

    const absolute = path.resolve(dir);
    const list = fs.readdirSync(absolute);

    list.forEach((item) => {
        const route = path.join(absolute, item);
        
         if(fs.statSync(route).isDirectory()) {
            directory(route).forEach(newfile => {
                fileSeeking.push(newfile);
            });
        } else if(path.extname(route) === '.md' || path.extname(route) === '.markdown'){
            fileSeeking.push(route);
            //console.log(fileSeeking);
        } 
    });
    //console.log(fileSeeking);
   return fileSeeking;
};

exports.directory = directory;

