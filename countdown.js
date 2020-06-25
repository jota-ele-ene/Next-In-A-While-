var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var seq = null;  
var i = 0;

var nextDate = 0;

function init() {

  var http = new XMLHttpRequest();
  var url = process.env.RANDOM_ORG_ENDPOINT;

  http.open("POST", url, true);
  http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  http.onreadystatechange = function() {
      if(http.readyState == 4 && http.status == 200) { 
  			var obj = JSON.parse(http.responseText);
        console.log(http.responseText);
        seq = obj.result.random.data;
        i = 0;
     }
  }
  http.send(JSON.stringify({
    "jsonrpc": "2.0",
    "method": "generateIntegers",
    "params": {
        "apiKey": process.env.RANDOM_ORG_API_KEY,
        "n": parseInt(process.env.RANDOM_ORG_N),
        "min": parseInt(process.env.RANDOM_ORG_MIN),
        "max": parseInt(process.env.RANDOM_ORG_MAX),
        "replacement": (process.env.RANDOM_ORG_REPL==='true')
    },
    "id": 42
  }));

  x = setInterval(function(){ 
    if (seq)
    {
      clearInterval(x);
      setNext();
    }
  }, 3000);

}

function setNext() {
  now = new Date().getTime();
  nextDate = now + seq[i];
  if (i<seq.length) 
  {
    var delay = seq[i++];
    setTimeout(setNext, delay);
    console.log(`Next event will be on => `+delay+` secods; `+(seq.length-i)+` events left`);
  }
  else   init();
}

function getNext() {
  return nextDate;
}

module.exports.init = init  ;
module.exports.setNext = setNext;
module.exports.getNext = getNext;
