var http = require("http");

http.createServer(function(req, res){
	//this call back is called when the web request is received
	//200: the status code
	res.writeHead(200, {"Content-type": "text/plain"});
	res.end('Hello World\n');
	console.log("Server running ");
}).listen(8124);

//This line doesn't wait for the web request to be made
console.log("Server running at http://127.0.0.1:8124/");

//Once the server is created and has received a request. The callback function write a plain
//text head with server status of 200 back to the browser.