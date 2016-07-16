var events = require('events');
var EventEmitter = events.EventEmitter;

var chat = new EventEmitter();
var users = [], chatlog = [];

chat.on('message', function(message){
    console.push(message);
});

chat.on('join', function(nickname){
    console.push(nickname);
});

/* Eventos: Emit */
chat.emit('join', "Lemos");
chat.emit('message', "Oi, Glaucia!");