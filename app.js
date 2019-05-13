var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Session #2 - Deep Dive into AWS EC2');
}).listen(8000);
