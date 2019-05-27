var express = require('express');
var messageDB = require('./DB/managers/messageDBMgr');
var http = require("./utils/http");

var app = express();
var hallAddr = "";

function send(res,ret){
	var str = JSON.stringify(ret);
	res.send(str)
}

var config = null;

exports.start = function(cfg){
	config = cfg;
	hallAddr = config.HALL_IP  + ":" + config.HALL_CLIENT_PORT;
	app.listen(config.CLIENT_PORT);
	console.log("account server is listening on " + config.CLIENT_PORT);
}

app.get('/get_message',function(req,res){
	console.log ('enter get_message')
	var type = req.query.type;
	console.log ('type:', type)

	if(type == null){
		http.send(res,-1,"parameters don't match api requirements.");
		return;
	}
	
	if(type == 'control'){
		http.send(res,0,"ok",{msg:0,version:20161128});	
		return;
	}

	var version = req.query.version;
	console.log ('version:', version)
	messageDB.get_message(type,version,function(data){
		if(data != null){
			http.send(res,0,"ok",{msg:data.msg,version:data.version});	
		}
		else{
			http.send(res,1,"get message failed.");
		}
	});
});
