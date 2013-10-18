var express = require('express');

var app = express();

var SERVER_PORT = 8080;

app.configure(function() {
	app.set('version', require('../package').version);
});

exports.app = app;

exports.start = function(){
	app.listen(SERVER_PORT, function() {
		console.log("Home API (v %s) listening on port %d", app.get('version'), SERVER_PORT);
	});
};
