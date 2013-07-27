var buf = new Buffer(" ");
fs=require("fs");
buf = fs.readFileSync('index.html');
var buf_write = buf.toString('utf8', 0, 27 );
console.log(buf_write);


