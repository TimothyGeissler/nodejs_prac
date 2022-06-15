var http = require('http')
var datetime = require('./datemodule');
var url = require('url');

http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); //html header
    var q = url.parse(req.url, true).query; //get data from url http://localhost:8080/?year=2017&month=July
    res.write("\n" + q.year + q.month + "\n");
    res.write("Date & Time: " + datetime.myDateTime() + "\n"); //use custom method
    res.end('Hello World'); //plain html text
}).listen(8080);