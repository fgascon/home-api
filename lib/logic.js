var arduino = require('./arduino');

var lightsState = false;

arduino.on('6:on', function(){
	lightsState = true;
});
arduino.on('6:off', function(){
	lightsState = false;
});

function toggleLights(){
	arduino.emit('6:' + (lightsState?'off':'on'));
}

arduino.on('button:up', function(){
	toggleLights();
});

exports.getState = function(pin, callback){
	if(pin == 6){
		callback(null, lightsState ? 1 : 0);
	}else{
		callback("Unknown state");
	}
};
