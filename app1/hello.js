var http = require('http');
i=1
http.createServer(function (req, res) {
    console.log(i++);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);
