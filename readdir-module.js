
const fs = require('fs');
const path = require('path');
//const index = require('./index.js');

let fileSeeking = [];
const directory = (dir) => {
    const absolute = path.resolve(dir);
    const list = fs.readFileSync(absolute);

    list.forEach((file) => {
        const route = path.join(absolute, file);
        if(fs.statSync(route).isDirectory()) {
            directory(route);
        } else if(path.extname(route) === '.md' || path.extname(route) === '.markdown'){
            fileSeeking.push(route);
            console.log(fileSeeking);
        }
    });
    console.log(fileSeeking);
};

//exports.directory = directory;

/* module.exports = (dir, ext, callback) => {
    ext =`$(ext)`;
    fs.readdir(dir, function(err, list) {
      if (err) return callback(err);
  
      const filtered = list.filter(file => {
        return path.extname === '.md';
      });
  
      return callback(null, filtered);
    }) */