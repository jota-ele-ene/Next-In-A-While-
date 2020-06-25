//index.js
const H = require('http');//use the http module
const T = require('twit');//use the twit module
const R = require('./router.js');//handle the routes
const C = require('./countdown.js');//handle the routes

const server = H.createServer((req, res) => {
  R.homeroute(req, res);
});

server.listen(8080, () => {
  console.log(`Server running !!!`);
  C.init();
});
