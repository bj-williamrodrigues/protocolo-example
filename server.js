var express = require('express');
var app = express();
var path = require('path');

app.use('/app', express.static('app'));
app.use('/assets', express.static('assets'));
app.use('/json', express.static('json'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);
