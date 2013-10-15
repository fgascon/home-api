var express = require('express');

var app = express();

var SERVER_PORT = 8080;

app.configure(function() {
	app.set('version', require('./package').version);
});

app.get('/', function(req, res) {
	res.json({
		success : true,
		app : "Home API",
		version : app.get('version')
	});
});

app.listen(SERVER_PORT, function() {
	console.log("Home API (v %s) listening on port %d", app.get('version'), SERVER_PORT);
});
