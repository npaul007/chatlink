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

var port = 3000;
server.listen(port,function(){
	console.log("fChatlink up and running!");
	console.log("App running on localhost:" +String(port));
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
    console.log('Client connected to Server successfully.');

    client.on('join', function(data) {
        console.log(data);
	});
	
	client.on('msgToServer', function(msgObj) {
		io.sockets.emit('msgToClient',msgObj)
	});
});