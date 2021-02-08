const querystring = require('querystring');
var https = require('https');

exports.handler = function (event, context, callback) {
	const body = JSON.parse(event.body).payload;
	var post_data = querystring.stringify(
		body.data
	);


if(body.data.elqFormName == "20contactus") {	
	
var genComms = false;
if (body.data.OptIn == "on") {
	genComms = true;
}

var eventComms = false;
if (body.data.subscribeToEvents1 == "on") {
	eventComms = true;
}

var insightComms = false;
if (body.data.insights == "on") {
	insightComms = true;
}
	
var post_data2 = {
  "fields": [
    {
      "name": "email",
      "value": body.data.emailAddress
    },
    {
      "name": "firstname",
      "value": body.data.firstName
    },
    {
      "name": "lastname",
      "value": body.data.lastName
    },
    {
      "name": "company",
      "value": body.data.company
    },
    {
      "name": "country",
      "value": body.data.country
    },
    {
      "name": "phone",
      "value": body.data.busPhone
    },
    {
      "name": "message",
      "value": body.data.paragraphText
    }
  ],
  "context": {
    "hutk": body.data.hutk, 
    "pageUri": body.data.referrer,
    "pageName": body.data.asset,
    "ipAddress": body.data.ip
  },
  "legalConsentOptions": {
    "consent": { 
	"consentToProcess": true,
	"text": "Please complete the form below and we will contact you shortly. We take data privacy very seriously and will not share your details. Read our privacy policy.",	 	
      "communications": [ 
        {
          "value": genComms,
          "subscriptionTypeId": 11618778,
          "text": "Subscribe to Email Communications: Adhoc news and announcements via email from CRMT."
        },
        {
          "value": insightComms,
          "subscriptionTypeId": 10994927,
          "text": "Subscribe to Insights from CRMT: Email content round-ups, hints and tips to help you improve marketing effectiveness"
        }		
      ]
    }
  }
}  

  // An object of options to indicate where to post to
  var post_options2 = {
	host: 'api.hsforms.com',
	port: '443',
	path: '/submissions/v3/integration/submit/8865266/' + body.data.formGuid,
	method: 'POST',
	headers: {
	  'Content-Type': 'application/json'
	}
  };
		
  // Set up the request
  var post_req2 = https.request(post_options2, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
		callback(null, {
			statusCode: 200,
			body:  "Done" 
		});
		console.log( "Done" );	      
      });
      res.on('error', function (e) {
		callback(null, {
			statusCode: 400,
			body:  "Failed " + e.message 
		});
		console.log( "Failed " + e.message );
      });

  });
	
  // post the data
  post_req2.write(JSON.stringify(post_data2));
  post_req2.end();
	
}
	
  // An object of options to indicate where to post to
  var post_options = {
      host: 's1010.t.eloqua.com',
      port: '443',
      path: '/e/f2',
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      }
  };

  // Set up the request
  var post_req = https.request(post_options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
		callback(null, {
			statusCode: 200,
			body:  "Done" 
		});
		console.log( "Done" );	      
      });
      res.on('error', function (e) {
		callback(null, {
			statusCode: 400,
			body:  "Failed " + e.message 
		});
		console.log( "Failed " + e.message );
      });

  });
	
  // post the data
  post_req.write(post_data);
  post_req.end();

}
