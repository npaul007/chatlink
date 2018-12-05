// engine
var express = require('express');
var bodyParser = require('body-parser');
var CircularJSON = require('circular-json');
var MongoClient = require('mongodb').MongoClient;
var app = express();
var server = require('http').createServer(app);  
var io = require('socket.io')(server);

// for directories in html/css files
app.use(express.static('./'));
// for reading data from post
app.use(bodyParser.urlencoded({extended: true}));

server.listen(process.env.PORT || 3000,function(){
	console.log("Chatlink up and running!");
}); 

// blog input route
app.get('/', function (req,res) {
	res.sendFile(__dirname+'/views/index.html');
});

app.post('/receiveMessage', function(req, res) {
	var msgObj = JSON.parse(Object.keys(req.body).find((key) => req.body[key] == ''))
	res.setHeader("Location", "/");
	res.send(JSON.stringify(msgObj))
});

io.on('connection', function(client) {  	
    client.on('join', function(data) {
        console.log(data);
	});
	
	client.on('msgToServer', function(msgObj) {
    	io.sockets.emit(JSON.parse(msgObj).roomId,msgObj)
	});
});