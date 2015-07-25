var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000));

app.use('/bower_components', express.static('bower_components')); //makes bower_components available
app.use('/data', express.static('data')); //makes /public available
app.use('/html', express.static('html')); //makes /public available
app.use('/img', express.static('img')); //makes /public available
app.use('/js', express.static('js')); //makes /public available
app.use('/css', express.static('css')); //makes /public available

app.get('/', function (req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

var server = app.listen(app.get('port'), function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('Xerorex available on http://%s:%s', host, port);
});
