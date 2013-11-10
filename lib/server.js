var express = require('express');

var app = express();

var SERVER_PORT = 8080;

app.set('version', require('../package').version);

app.use(express.compress());
app.use(express.json());
app.use(express.urlencoded());

exports.app = app;

exports.start = function(){
	app.listen(SERVER_PORT, function() {
		console.log("Home API (v %s) listening on port %d", app.get('version'), SERVER_PORT);
	});
};
