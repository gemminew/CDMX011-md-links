const axios = require('axios')
const path = require('path');

function getValidation (links) {
    
    return links.map(async (link) => {
        let res = link;
        await axios.get(link.url) //returns a promise
         .then((response) => {
             res.status = response.status;
             res.message = 'OK';
         })
         .catch((error) => {
             if(!error.response)
             {
                 console.log("could not request " + link);
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


const validationFormatter = async (links) =>{
    return Promise.all(links).then(filteredLinks => filteredLinks.map(x => path.resolve('./', x.file) + ' ' + x.text + ' '+ x.status+' ' + x.message ));
};

 exports.validationFormatter = validationFormatter;
 exports.getValidation = getValidation;