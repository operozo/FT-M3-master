// const { get } = require("@11ty/eleventy/src/TemplateCache");

// front fetch('http://localhost:3001/Home');

// request get('http://localhost:3001/Home');

var http = require('http');
var PORT = 3001;
http.createServer( function(req, res){
    res.writeHead(200, { 'Content-Type':'text/html' }) //Le ponemos el status code y algunos pair-values en el header
	res.end('Hola, Mundo!\n');
}).listen(PORT, 'localhost', (()=>{console.log(`Corriendo en puerto ${PORT}`)}))