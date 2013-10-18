var arduino = require('../lib/arduino');

var pins = (function(){
	var pins = [];
	for(var i=1; i<=13; i++){
		pins.push(i.toString());
	}
	for(var i=1; i<=6; i++){
		pins.push('A'+i.toString());
	}
	return pins;
}());

module.exports = function(app){
	
	app.post('/arduino/:pin', function(req, res){
		var pin = req.params.pin;
		if(pins.indexOf(pin) < 0){
			res.json({
				success: false,
				error: "Invalid pin " + pin
			});
			return;
		}
		arduino.setPin(pin, req.body.state);
	});
};
