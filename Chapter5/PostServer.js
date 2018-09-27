var http = require('http');
var querystring = require('querystring');

var server = http.createServer().listen(8124);

server.on('request', function(req, res){
	if(req.method == 'POST'){
		var body = '';

		//append data chunk to body
		req.on('data', function(data){
			body += data;
		});

		//data transmitted
		req.on('end', function(){
			var post = querystring.parse(body);
			console.log(post);
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.end('Hello World\n');
		});
	}
});