const axios = require('axios')
//const link = require('./readFile');


function getValidation (links) {
    console.log('getValidation...');
    
    return links.map(async (link) => {
        let res = link;
        await axios.get(link.url)
         .then((response) => {
     //        if(response.status >= 200 && response.status <= 299) {
     //         /*status = response.status;*/
     // /*          const validated = { //Note: Returning in this then() method does not return getValidation() 
     //             ...link,
     //             'status': response.status,
     //             'message': 'OKAY'
     //          }  */
     //          return validated
     //         }
             res.status = response.status;
             res.message = 'OK';
         })
         .catch((error) => {
             // console.log(err);
             if(!error.response)
             {
                 console.log(link);
                 console.log(JSON.stringify(error));
             }
             else
             {
                 res.status = error.response.status;
                 res.message = error.response.message;
             }
     /*         const validated = {
                 ...link,
                 'status': error.response.status,
             } */
            });
            return res;
    });
};

   // getValidation("https://google.com/teapot").then(x => console.log(x));



 exports.getValidation = getValidation;