var express = require('express'),
        app = express();
var path    = require("path");
app.get('/', function(req, res) {
  console.log('Request received: ' + req.url);
  //res.sendFile(path.join(__dirname+'/index.html'));
  res.send('Hello World!');
});


app.listen('8080');
console.log('Modulus demo app started on port 8080');