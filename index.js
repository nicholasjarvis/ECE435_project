var express = require('express');
var socket = require('socket.io');
// App setup
var app = express();
var server = app.listen(5000,function(){
    console.log('listening to requests on the port 5000');
});

//static files
app.use(express.static('public'));

//setting up socket
var io = socket(server);
io.on('connection',function(socket){
  console.log('socket connection established',socket.id);

  socket.on('chatMessage',function(data){
    io.sockets.emit('chatMessage', data);
  });
  socket.on('disconnection',function(data){
    socket.broadcast.emit('disconnection',data);
  });
});
