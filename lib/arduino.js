var EventEmitter = require('events').EventEmitter,
	five = require("johnny-five");

var board = new five.Board();

var mediator = module.exports = new EventEmitter();

board.on('ready', function(){
	
	var light = new five.Led({
		pin: 12
	});
	
	//initial flash to tell that it's working
	light.on();
	this.wait(3000, function(){
		light.off();
	});
	
	//listen for events
	mediator.on('on', function(){
		light.on();
	});
	mediator.on('off', function(){
		light.off();
	});
});
