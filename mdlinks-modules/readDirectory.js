
const fs = require('fs');
const path = require('path');
//const  = require('./readFile.js');

const directory = (dir) => {
    let fileSeeking = [];
    console.log(dir);
    if(path.extname(dir) == ".md" || path.extname(dir) == ".markdown") {
        return [dir];
    }
    const absolute = path.resolve(dir);
    if(!fs.existsSync(absolute) || !fs.statSync(absolute).isDirectory()){
        return [];
    } 
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

