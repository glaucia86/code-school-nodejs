var events = require('events');
var EventEmitter = events.EventEmitter;

var chat = new EventEmitter();

chat.on('message', function() {
    console.log(message);
});