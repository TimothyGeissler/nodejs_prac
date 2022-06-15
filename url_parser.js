var url = require('url');
var addr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(addr, true);

console.log("For address: " + addr);
console.log("\nHost: " + q.host);
console.log("Pathname: " + q.pathname);
console.log("Search: " + q.search);

var qdata = q.query;
console.log("Query object: " + qdata.month + ", " + qdata.year);