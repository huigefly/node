var https = require('https');
var fs = require('fs');
var express = require('express');
var multer  = require('multer');
var bodyParser = require('body-parser');

var app = express();
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// use static pic res
app.use(express.static('public'));

app.use(multer({ dest: './tmp/'}).array('image'));

var options = {
	key: fs.readFileSync('C:\\ssl\\1965568_ccgame.online.key'),
	cert: fs.readFileSync('C:\\ssl\\1965568_ccgame.online.pem')
};

var privateKey  = fs.readFileSync('C:\\ssl\\1965568_ccgame.online.key', 'utf8');
var certificate = fs.readFileSync('C:\\ssl\\1965568_ccgame.online.pem', 'utf8');
var credentials = {key: privateKey, cert: certificate};
var httpsServer = https.createServer(credentials, app);

httpsServer.listen (8990, function () {
	var host = httpsServer.address().address;
	var port = httpsServer.address().port;

	console.log ("https server:%s port:%s", host, port);
});


app.get('/getOpenid', function (req, res) {
	// 输出 JSON 格式
   response = {
       openid:"hello_openid_xxxx"
   };
   res.send(JSON.stringify(response));
})
 
app.post('/post', urlencodedParser, function (req, res) {
   // 输出 JSON 格式
   response = {
       code:req.body.code,
       openid:req.body.openid
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
 
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "fileUpload.html" );
})
 
app.post('/file_upload', function (req, res) {

   console.log(req.files[0]);  // 上传的文件信息

   var des_file = __dirname + "/" + req.files[0].originalname;
   fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
         if( err ){
              console.log( err );
         }else{
               response = {
                   message:'File uploaded successfully', 
                   filename:req.files[0].originalname
              };
          }
          console.log( response );
          res.end( JSON.stringify( response ) );
       });
   });
})
 