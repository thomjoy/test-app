// simple test app.

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(3002, "127.0.0.1");
console.log('[*] App listening on 3002');