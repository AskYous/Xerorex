var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000));

app.use('/bower_components', express.static('bower_components')); //makes bower_components available
app.use('/public', express.static('public')); //makes /public available

app.get('/', function (req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

var server = app.listen(app.get('port'), function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('Xerorex available on http://%s:%s', host, port);
});
