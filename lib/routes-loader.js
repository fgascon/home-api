var fs = require('fs'),
	path = require('path');

var BASE_ROUTE_PATH = path.join(__dirname, '..', 'routes');
var files = fs.readdirSync(BASE_ROUTE_PATH);

module.exports = function(server){
	files.forEach(function(file){
		require(path.join(BASE_ROUTE_PATH, file))(server.app, server);
	});
};