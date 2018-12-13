//making connection
var socket = io.connect('http://localhost:5000');

//Query DOM
var button = document.getElementById('send');
var userID = document.getElementById('userID');
var message = document.getElementById('message');
var output = document.getElementById('output');
var disconnect = document.getElementById('disconnect');

//Emitting events

button.addEventListener('click',function(){
  socket.emit('chatMessage',{
//    if(!userID.value){
//      userID.value = "Anonymous";
//    }
  message:message.value,
  handle:userID.value
  });
  unbind.click
});

disconnect.addEventListener('click',function(){
  socket.emit('disconnection',{
    handle:userID.value
  });
});


//event listen
socket.on('chatMessage',function(data){
  if(!data.handle){
       data.handle = "Anonymous";
      }
  if(!data.message){
      data.message = "I Forgot to type something. What a dummy.";
  }
  output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
  clearchat();
});

socket.on('disconnection',function(data){
  if(!data.handle){
       data.handle = "Anonymous";
  }
  output.innerHTML += '<p><strong>' + data.handle + " has disconnected." + '</p>';
  socket.disconnect();
});

function clearchat() {

     message.value = "";
}
