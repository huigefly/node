var http = require ('http');
var https = require('https');
var fs = require('fs');
var express = require('express');
var app = express();

var options = {
	key: fs.readFileSync('C:\\ssl\\1965568_ccgame.online.key'),
	cert: fs.readFileSync('C:\\ssl\\1965568_ccgame.online.pem')
};

var privateKey  = fs.readFileSync('C:\\ssl\\1965568_ccgame.online.key', 'utf8');
var certificate = fs.readFileSync('C:\\ssl\\1965568_ccgame.online.pem', 'utf8');
var credentials = {key: privateKey, cert: certificate};

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
 
httpServer.listen (9090, function () {
	console.log ("http server is running 9090");
	
});
httpsServer.listen (8990, function () {
	console.log ("https server is running 8990");
	
});

//  主页输出 "Hello World"
app.get('/', function (req, res) {
   console.log("主页 GET 请求");
   if (req.protocol == 'https') {
	   res.status(404).send ("welcome to safety land!8990 https!");
   } else {
	   res.status(200).send ("welcome 89909089");
   }
});
 
 