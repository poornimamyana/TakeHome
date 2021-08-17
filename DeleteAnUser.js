const axios = require('axios'); //http librarz used to make a call to the Backend or API
var chai = require('chai');  //Verification library  
var expect = chai.expect;
	
// Make a POST request to create an User
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