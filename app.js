var express = require('express'),
  app = express(),
  path = require('path');

  var chats=require('./model/chats');

  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/babble');

  var db=mongoose.connection;
  db.on('error',console.error.bind,(console,'connection error:'));
  db.once('open',function(){
    console.log('Connected to Babble[Mongo]');
    chats.findUser('arun',function(data){
      console.log(data);
    })
  });

var routes = require('./routes');
var babble = require('./routes/babble');
var indexRoute=require('./routes/index');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes);
app.get('/babble', babble);
app.get('/chats',indexRoute);

app.get('*', function(req, res) {
  res.send('<h1>404 Error</h1>File not found');
});

var server = app.listen(8080, function() {
  console.log("Server started");
});
