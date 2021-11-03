const axios = require('axios')
const path = require('path');
function getValidation (links) {
    //console.log('getValidation...');
    
    return links.map(async (link) => {
        let res = link;
        await axios.get(link.url)
         .then((response) => {
             res.status = response.status;
             res.message = 'OK';
         })
         .catch((error) => {
             // console.log(err);
             if(!error.response)
             {
                //  console.log(link);
                //  console.log(JSON.stringify(error));
             }
             else
             {
                 res.status = error.response.status;
                 res.message = error.response.message;
             }
            });
            return res;
    });
};

   // getValidation("https://google.com/teapot").then(x => console.log(x));

const validationFormatter = async (links) =>{
//    return links.map(async (x) => path.relative('./', x.file) + ' ' + x.text + ' '+ x.status+' ' + x.message);
    return Promise.all(links).then(filteredLinks => filteredLinks.map(x => path.relative('./', x.file) + ' ' + x.text + ' '+ x.status+' ' + x.message ));
};

 exports.validationFormatter = validationFormatter;
 exports.getValidation = getValidation;