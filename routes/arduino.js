var arduino = require('../lib/arduino');

module.exports = function(app){
	
	/*app.get('/arduino/:pin', function(req, res){
		arduino.setPin(req.params.pin, req.body.state, function(err, value){
			if(err){
				res.json({
					success: false,
					error: err
				});
			}else{
				res.json({
					success: true,
					value: value
				});
			}
		});
	});
	
	app.post('/arduino/:pin', function(req, res){
		arduino.setPin(req.params.pin, req.body.state, function(err, value){
			if(err){
				res.json({
					success: false,
					error: err
				});
			}else{
				res.json({
					success: true,
					value: value
				});
			}
		});
	});*/
};
