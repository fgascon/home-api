var arduino = require('./arduino');

var lightsState = false;

arduino.on('lights:on', function(){
	lightsState = true;
});
arduino.on('lights:off', function(){
	lightsState = false;
});

function toggleLights(){
	arduino.emit('lights:' + (lightsState?'off':'on'));
}

arduino.on('button:up', function(){
	toggleLights();
});

exports.getLightsState = function(callback){
	callback(null, lightsState ? 1 : 0);
};
