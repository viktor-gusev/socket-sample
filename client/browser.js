'use strict';

// создать подключение
const socket = io.connect('http://localhost:8080');

socket.on('login', (data) => {
  console.log(data)
  document.getElementById('subscribe').innerHTML = data;
});

socket.on('send', (data) => {
  console.log(data)
  document.getElementById('subscribe').innerHTML = data.data + '<br>'
    + document.getElementById('subscribe').innerHTML;
});

let sendData = () => {
  let data = document.getElementsByName('message')[0].value;
  let response = {
    data: data
  };
  socket.emit('send', response);
  return false;
};
