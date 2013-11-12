var arduino = require('../lib/arduino'),
	logic = require('../lib/logic');

module.exports = function(app){
	
	app.get('/lights/:command', function(req, res){
		var params = req.params;
		if(params.command === 'on' || params.command === 'off'){
			arduino.emit('lights:' + params.command);
			returnLightsState(res);
		}else{
			res.json({
				success: false,
				error: "invalid command: " + params.command
			});
		}
	});
	
	app.get('/lights', function(req, res){
		returnLightsState(res);
	});
	
	function returnLightsState(res){
		logic.getLightsState(function(err, state){
			if(err){
				res.json({
					success: false,
					error: err
				});
			}else{
				res.json({
					success: true,
					state: state
				});
			}
		});
	}
	
};
