const querystring = require('querystring');
var https = require('https');

exports.handler = function (event, context, callback) {
	var post_data = querystring.stringify(
		event.body
	);

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
 console.log( post_data );
  // post the data
  post_req.write(post_data);
  post_req.end();

}
