const axios = require('axios'); //http library used to make a call to the Backend or API
var chai = require('chai');  //Verification library
var expect = chai.expect;

// Make a GET request to receive the list of Users on Page 2
axios.get('https://reqres.in/api/users', {
    params: {
        page: 2 //You can change this value to 1 to get user list on page 1
            }
        })
    .then(response => {
        console.log('Status code = ' + response.status);
	    var statuscode= response.status;
	    expect(statuscode).to.equal(200);
        console.log('Status code is verified');
	    console.log("***********************");
        console.log('Status Text = ' + response.statusText);
	    var statustext=response.statusText;
        expect(statustext).to.equal('OK');
	    console.log('statusText is verified');
        console.log("**********************");
        console.log('Please find below the list of users-'); 
        console.log(response.data);
});


