var port  = 9000;

var socket  = require('socket.io')(9001);
var express = require('express');
var redis   = require('redis').createClient(6379);

var app   = express();
 
redis.subscribe("notification");

redis.on("connect", function() {
  console.log("Connected....");
});

// redis.on("message", function(channel, message) {
//   message = JSON.parse(message);

//   console.log(message);
//   // socket.emit('notif', message.notif);
// });

socket.on('connect', function(client){
  redis.on("message", function(channel, message) {
    message = JSON.parse(message);

    console.log(message);
    client.emit('notification', message.notif);
  });
});

app.listen(port, function(){
  console.log(`run port ${port}`);
});