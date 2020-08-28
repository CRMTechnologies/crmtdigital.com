const querystring = require('querystring');
var https = require('https');

exports.handler = function (event, context) {
	var post_data = querystring.stringify(
		event.body
	);
	var post_status = 200;
	var post_response = "Done";

  // An object of options to indicate where to post to
  var post_options = {
      host: 's1010.t.eloqua.com',
      port: '443',
      path: '/e/f2',
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(post_data)
      }
  };

  // Set up the request
  var post_req = https.request(post_options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
		post_status = 200;
		console.log( "Done" );
      });
      res.on('error', function (e) {
		post_status = 400;
		console.log( "Failed: " + e.message ); 	  
      });

  });

  // post the data
  post_req.write(post_data);
  post_req.end();
}
