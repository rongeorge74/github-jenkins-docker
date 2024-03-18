// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello Ron\n");
});

// listen on localhost:8000
server.listen(8000);
console.log("Server listening at http://ec2-34-210-123-117.us-west-2.compute.amazonaws.com:8000/");
