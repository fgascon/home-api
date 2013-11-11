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

api.all('*', function(req, res, next) {
	if (!req.get('Origin'))
		return next();
	// use "*" here to accept any origin
	res.set('Access-Control-Allow-Origin', '*');
	res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
	res.set('Access-Control-Allow-Max-Age', 3600);
	if ('OPTIONS' == req.method)
		return res.send(200);
	next();
}); 
