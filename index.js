//index.js
var http = require('http');//use the http module
var twit = require('twit');//use the twit module


//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response

  console.log("listening on port 8080");

  setNext(setNext, 1500);

}).listen(8080); //the server object listens on port 8080

function setNext(arg) {
  console.log(`Next will be on => ${arg}`);
  setTimeout(setNext, arg, Math.random() * 10000);
}

