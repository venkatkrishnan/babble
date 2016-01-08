var express = require('express');
var app = express();

var routes = require('./routes');
var babble = require('./routes/babble');

app.set('view engine', 'ejs');

app.get('/', routes);
app.get('/babble', babble);

app.get('*', function(req, res) {
  res.send('<h1>404 Error</h1>File not found');
});

var server = app.listen(8080, function() {
  console.log("Server started");
});
