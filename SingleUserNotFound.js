const axios = require('axios'); //http library used to make a call to the Backend or API
var chai = require('chai');  //Verification library  
var expect = chai.expect;

// Make a GET request to retreive a Single User based on id that is out of scope. Here id=13
axios.get('https://reqres.in/api/users/13')
    .catch(error => {
        console.log(error.toJSON());
        if (error.response) {
            console.log('The request was made and the server responded with a status code ' + '"' + error.response.status + '"');
            console.log(error.response.data);
          } 
        else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } 
        else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
});



