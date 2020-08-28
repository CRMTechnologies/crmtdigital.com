var https = require('https');

exports.handler = function (event, context) {
	const { payload } = JSON.parse(event.body);
	var post_data = payload.stringify(
		event.body
	);

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
		callback(null, {
			statusCode: 200,
			body:  "Done" 
		});	
      });
      res.on('error', function (e) {
		callback(null, {
			statusCode: 400,
			body:  "Failed " + e.message 
		});	 	  
      });

  });

  // post the data
  post_req.write(post_data);
  post_req.end();

}
