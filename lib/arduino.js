var EventEmitter = require('events').EventEmitter,
	five = require("johnny-five");

var board = new five.Board();

var mediator = module.exports = new EventEmitter();

board.on('ready', function(){
	
	var lights = new five.Led({
		pin: 6
	});
	
	var button = new five.Button(7);
	
	button.on("down", function() {
		mediator.emit('button:down');
	});
	button.on("up", function() {
		mediator.emit('button:up');
	});
	
	//initial flash to tell that it's working
	lights.on();
	this.wait(3000, function(){
		lights.off();
	});
	
	//listen for events
	mediator.on('lights:on', function(){
		lights.on();
	});
	mediator.on('lights:off', function(){
		lights.off();
	});
	
});
