const axios = require('axios'); //http library used to make a call to the Backend or API
var chai = require('chai');  //Verification library  
var expect = chai.expect;

// Make a GET request to retreive a Single User based on id, here we have 12 users with 2 pages, let me pick 12th user
axios.get('https://reqres.in/api/users/4')
    .then(response => {
        console.log(response.status);
	    var statuscode= response.status;
	    expect(statuscode).to.equal(200);
        console.log('Status code is verified');
	    console.log("***********************");
        console.log(response.statusText);
	    var statustext=response.statusText;
        expect(statustext).to.equal('OK');
	    console.log('statusText is verified');
        console.log("**********************");
        console.log(response.data);
    });
    



