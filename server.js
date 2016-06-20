var http = require('http');

var HTTP_PORT = 3000;

http.createServer(function(req, res) {
	res.write("it totally works!");
	res.end();
}).listen(HTTP_PORT);

console.log("Server listening on port " + HTTP_PORT);
