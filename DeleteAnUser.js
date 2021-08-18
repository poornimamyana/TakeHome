const axios = require('axios'); //http library used to make a call to the Backend or API
var chai = require('chai');  //Verification library  
var expect = chai.expect;
	
// Make a DELETE request to delete an User
axios.delete('https://reqres.in/api/users/2')
    .then(response => {
        console.log(response.status);
        var statuscode= response.status;
        //assert.equal(statuscode, 200);
        expect(statuscode).to.equal(204);
        console.log('Status code is verified');
        console.log("***********************");
        console.log('Status message - ' + response.statusText);
});
