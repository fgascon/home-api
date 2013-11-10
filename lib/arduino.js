
var pins = (function(){
	var pins = {};
	for(var i=1; i<=13; i++){
		pins[i.toString()] = {
			type: 'digital',
			mode: 'none',
			state: 0
		};
	}
	for(var i=1; i<=6; i++){
		pins['A'+i] = {
			type: 'analog',
			mode: 'none',
			state: 0
		};
	}
	return pins;
}());

exports.getPin = function(pinName, state, callback){
	var pin = pins[pinName];
	if(!pin){
		return callback("Invalid pin " + pinName);
	}
	callback(null, pin);
};

exports.setPin = function(pinName, state, callback){
	var pin = pins[pinName];
	if(!pin){
		return callback("Invalid pin " + pinName);
	}
	pin.mode = 'write';
	pin.state = state;
	callback(null, pin);
};
