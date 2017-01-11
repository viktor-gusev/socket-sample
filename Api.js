'use strict';
/**
 * Created by victor on 17.9.1.
 */

module.exports = class Api {

  constructor(config, app, io) {
    this.config = config;
    this.app = app;
    this.io = io;
    this.io.on('connection', this.setConnection.bind(this));
  }

  setConnection(socket) {
    socket.emit('login', 'Successfully connected!');
    socket.on('send', data => {
      this.check(data).then(result => {
        console.log(result, !!result);
        if (!!result.event)
          socket.emit(result.event, result.data)
      });
    });

    socket.on('add-message', (data) => {
      socket.emit('new message', {
        username: socket.username,
        message: data,
        date: Date.now()
      });
      socket.broadcast.emit('new message', {
        username: socket.username,
        message: data,
        date: Date.now()
      });
    });

  }

  check(data) {
    return new Promise((resolve, reject) => {
      this._processData(data).then(res => {
        resolve(res);
      });
    })

  }

  _processData(data) {
    return new Promise((resolve, reject) => {
      // TODO: send data to controllers
      data.status = 'processed';

      let result = {event: 'send', data: data};
      resolve(result);
    });
  }

};
