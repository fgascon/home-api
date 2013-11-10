var arduino = require('./arduino');

var lightsState = false;

arduino.on('12:on', function(){
	lightsState = true;
});
arduino.on('12:off', function(){
	lightsState = false;
});

function toggleLights(){
	arduino.emit('12:' + (lightsState?'off':'on'));
}

arduino.on('button:up', function(){
	toggleLights();
});

exports.getState = function(pin, callback){
	if(pin == 12){
		callback(null, lightsState ? 1 : 0);
	}else{
		callback("Unknown state");
	}
};
