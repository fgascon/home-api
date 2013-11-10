var server = require('./lib/server'),
	routesLoader = require('./lib/routes-loader');

routesLoader(server);
server.start();

require('./lib/logic');
