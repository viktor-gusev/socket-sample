'use strict';
/**
 * Created by victor on 17.9.1.
 */

const config = require('./config');
const express = require('express');
const app = express();
const server = require('http').createServer(app);

const Api = require('./Api');
const io = require('socket.io')(server);


let api = new Api(config, app);

//app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  console.log("New connection");
  // when the client emits 'new message', this listens and executes
  socket.on('add-message', (data) => {
    socket.emit('new message', {
      username: socket.username,
      message: data,
      date: Date.now()
    });
    // we tell the client to execute 'new message'
    socket.broadcast.emit('new message', {
      username: socket.username,
      message: data,
      date: Date.now()
    });
  });
});

server.listen(config.PORT, ()=> {
  console.log('Running on http://localhost:' + config.PORT);
});
