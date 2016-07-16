var http = require('http');

var server = http.createServer();

server.on('request', function(request, response) {
    
    response.writeHead(200);
    response.write("Olá, Esta é a Glaucia Lemos");
    response.end();
});

server.on('request', function(request, response) { 

    console.log("New request coming in....");
});

server.on('close', function(request, response) {

    console.log("Closing down the server...");
});
server.listen(8080);