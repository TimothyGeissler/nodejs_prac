var url = require('url');
var http = require('http');
var fs = require('fs')

// http://localhost:8080/winter.html
// OR
// http://localhost:8080/summer.html


http.createServer(function (req, res) {
    var query = url.parse(req.url, true);
    var file = "." + query.pathname;
    fs.readFile(file, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        }
    });
}).listen(8080);