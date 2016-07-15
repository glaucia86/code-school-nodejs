var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
    response.writeHead(200);
    
    /* Função para poder realizar a leitura do arquivo 'index.html' */
    fs.readFile('index.html', function(error, contents) {
        response.write(contents);
        response.end();
    });
}).listen(8080);