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


let api = new Api(config, app, io);

app.use(express.static(__dirname + '/public'));

server.listen(config.PORT, ()=> {
  console.log('Running on http://localhost:' + config.PORT);
});
