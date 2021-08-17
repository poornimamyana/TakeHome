const axios = require('axios'); //http librarz used to make a call to the Backend or API
var chai = require('chai');  //Verification library  
var expect = chai.expect;
	
// Make a PUT request to update an existing User
axios.put('https://reqres.in/api/users/4', {
    name: 'Poornima Myana',
    job: 'Software Tester'
  })
    .then(response => {
        console.log(response.status);
        var statuscode= response.status;
        expect(statuscode).to.equal(200);
        console.log('Status code is verified');
        console.log("***********************");
        console.log(response.data);
});