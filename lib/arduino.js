var EventEmitter = require('events').EventEmitter,
	five = require("johnny-five");

var board = new five.Board();

var mediator = module.exports = new EventEmitter();

board.on('ready', function(){
	
	var pin6 = new five.Led({
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
	pin6.off();
	this.wait(3000, function(){
		pin6.on();
	});
	
	//listen for events
	mediator.on('6:on', function(){
		pin6.off();
	});
	mediator.on('6:off', function(){
		pin6.on();
	});
	
});
