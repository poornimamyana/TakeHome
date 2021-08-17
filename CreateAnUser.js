const axios = require('axios'); //http librarz used to make a call to the Backend or API
var chai = require('chai');  //Verification library
var expect = chai.expect;
	
// Make a POST request to create an User
axios.post('https://reqres.in/api/users', {
    name: 'Poornima',
    job: 'Software Tester'
  })
    .then(response => {
        console.log(response.status);
        var statuscode= response.status;
        expect(statuscode).to.equal(201);
        console.log('Status code is verified');
        console.log("***********************");
        console.log(response.data);
});