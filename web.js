
// These next four lines work, but won't deploy properly on Heroku alone
// therefore, merge somehow?? try putting buf_write into the send function?
//
// So, first read index.html and get into buffer, convert to string variable
var buf = new Buffer(" ");
fs=require("fs");
buf = fs.readFileSync('index.html');
var buf_write = buf.toString('utf8', 0, 27 );
//console.log(buf_write);

// Below is the original web.js that deployed correctly on Heroku
//
// Then, use the prior web.js functions and call the buff_write string with send
var express = require('express');
var app = express();
app.use(express.logger());


app.get('/', function(request, response) {
  response.send(buf_write);
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

