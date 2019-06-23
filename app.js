var http = require('http');
var fs = require('fs');

var html = fs.readFileSync('hello-world.html');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(html);
}).listen(8000);
