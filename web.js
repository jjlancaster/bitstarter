var buf = new Buffer(256);
var buf2 = null ;
fs=require("fs");
buf = fs.readFileSync('index.html');
buf2 = buf.toString();
var express = require('express');
var app = express();
app.use(express.logger());
app.get('/', function(request, response) {
  response.send(buf2);
  });
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
  });

