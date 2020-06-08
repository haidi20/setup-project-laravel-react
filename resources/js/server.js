var port  = 9000;

var socket  = require('socket.io')(port);
var express = require('express');
var redis   = require('redis').createClient(6379);

var app   = express();
 
redis.subscribe("broadcast");

redis.on("connect", function() {
  console.log("Connected....");
});

socket.on('connect', function(){
  redis.on("message", function(channel, message) {
    message = JSON.parse(message);

    socket.emit('notif', message.notif);
  });
});

app.listen(port, function(){
  console.log(`run port ${port}`);
});