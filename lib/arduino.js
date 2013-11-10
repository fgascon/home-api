var EventEmitter = require('events').EventEmitter,
	five = require("johnny-five");

var board = new five.Board();

var mediator = module.exports = new EventEmitter();

board.on('ready', function(){
	
	var pin12 = new five.Led({
		pin: 12
	});
	
	//initial flash to tell that it's working
	pin12.on();
	this.wait(3000, function(){
		pin12.off();
	});
	
	//listen for events
	mediator.on('12:on', function(){
		pin12.on();
	});
	mediator.on('12:off', function(){
		pin12.off();
	});
});
