var http = require('http');

var HTTP_PORT = 8080;

http.createServer(function(req, res) {
	res.write("beep");
	res.end();
}).listen(HTTP_PORT);

console.log("Server listening on port " + HTTP_PORT);
