let request = require('request');

exports.handler = async function (event, context, callback) {
	const { payload } = JSON.parse(event.body);

	request.post({
		headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		url: 'https://s1010.t.eloqua.com/e/f2',
		body: payload
	},
	function (error, response, body) {
		callback(null, {
			statusCode: response.statusCode,
			body:  "Done " + body 
		});	 
	});
};
