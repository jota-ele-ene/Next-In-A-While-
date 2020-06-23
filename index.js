//index.js
var http = require('http');//use the http module
var twit = require('twit');//use the twit module

var list = "1,2,3,4,6,7,5,3,2,3"; // timeout in seq
var seq = list.split(",");
var i = 0;

var countDownDate = new Date().getTime()+seq[0]*10000;

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.write(''); //write a response to the client
  res.write('Next even will be on !' + getCountdown()); //write a response to the client
  res.end(); //end the response

  console.log("listening on port 8080");

  setNext(setNext);

}).listen(8080); //the server object listens on port 8080

function setNext() {
  now = new Date().getTime();
  countDownDate = now + seq[i]*1000;
  console.log(`Next will be on => `+getCountdown());
  if (i<seq.length) setTimeout(setNext, seq[i++]*1000);
}

function getCountdown () {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  return days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}