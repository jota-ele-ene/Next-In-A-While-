var render = require("./render.js");
var C = require('./countdown.js');//handle the routes
var querystring = require("querystring");
var commonHeader = { 'Content-Type': 'html' };

function homeroute(req, res) {
  if (req.url === "/")
  {
    res.writeHead(200, commonHeader);
    render.view("header", {}, res);
    render.view("countdown", {countDownDate:C.getNext()}, res);
    render.view("footer", {}, res);
    res.write(''); //write a response to the client
    res.end(); //end the response
  }
}

module.exports.homeroute = homeroute;
