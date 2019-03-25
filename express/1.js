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
	   res.status(200).send ("https get req");
   } else {
	   res.status(200).send ("http get req");
   }
});
 
 //  POST 请求
app.post('/', function (req, res) {
   console.log("主页 POST 请求");
   res.send('Hello POST');
})

//  /del_user 页面响应
app.delete('/del_user', function (req, res) {
   console.log("/del_user 响应 DELETE 请求");
   res.send('删除页面');
})

//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
   console.log("/list_user GET 请求");
   res.send('用户列表页面');
})

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {   
   console.log("/ab*cd GET 请求");
   res.send('正则匹配');
})
 
 
 
 
 
 