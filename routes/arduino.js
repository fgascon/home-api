var arduino = require('../lib/arduino');

module.exports = function(app){
	
	app.get('/arduino/:pin/:command', function(req, res){
		var params = req.params;
		if(params.command === 'on' || params.command === 'off'){
			arduino.emit(params.pin + ':' + params.command);
			res.json({
				success: true,
				pin: params.pin,
				command: params.command
			});
		}else{
			res.json({
				success: false,
				error: "invalid command: " + params.command
			});
		}
	});
};
