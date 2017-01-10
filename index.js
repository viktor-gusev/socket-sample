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


app.use(express.static(__dirname + '/client'));

server.listen(config.PORT, ()=> {
  console.log('Running on http://localhost:' + config.PORT);
});

let api = new Api(config, server, io);
