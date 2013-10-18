
module.exports = function(app){
	
	app.get('/', function(req, res){
		res.json({
			success: true,
			app: "Home API",
			version: app.get('version')
		});
	});
};
