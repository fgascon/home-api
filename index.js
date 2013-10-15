var http = require('http'),
	express = require('express');

var app = express(server),
	server = http.createServer(app);

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

server.listen(process.env.PORT || 8080, function() {
	console.log("Home API (v %s) listening on port %d", app.get('version'), server.address().port);
});
