var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
	'msg' : 'Hello World',
	'xixi': 'jhahah'
});

var options = {
	hostname: 'localhost',
	port: 8124,
	method: 'POST',
	path: '/',
	//distable connection pooling: one request at a time
	agent: false,
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length': postData.length
	}
};

var req = http.request(options, function(res){
	console.log('Status: ' + res.statusCode);
	console.log('Headers: ' + JSON.stringify(res.headers));
	res.setEncoding('utf8');

	//get data as chunks
	res.on('data', function(chunk){
		console.log('Body: ' + chunk);
	});

	res.on('end', function(){
		console.log('no more data in response');
	});
});

req.on('error', function(e){
	console.log('Problem with resuest' + e);
});

//write data to request body
req.write(postData);
req.end();