var http = require('http');

var server = http.createServer(function(req, res) {
    if (req.url == 'hello/:name') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ "Hello": "<name>" }));
        res.end();
    }
    else {
        res.end('Invalid request!');
    }
});

server.listen(5000);

console.log('Node.js web server at port 5000 is running..');