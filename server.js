const express = require('express') ;
const app = require('./app') ;
const wss = require('./socket')

// we upgrade the server to web socket connection . 
app.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, ws => {
      wss.emit('connection', ws, request);
    });
  });

 
const server = app.listen(8000, _ => {
    console.log('server is running' ) ; 
});  
module.exports = server; 