const WebSocket = require('ws');
const app = require('./app');

app.get('/connect', (req, res) => {
  const ws = new WebSocket('ws://localhost:8080'); // Replace with serverB's WebSocket address
  ws.onopen = () => {
    res.send('WebSocket connection established');
  }; 
  ws.onmessage = (message) => {
    console.log('Received message from APP server:', message.data);
  };
  ws.onerror = (error) => {
    console.error('WebSocket error:', error.message);
  };

});
 
const wss = new WebSocket.Server({ port: 8080 });
wss.on('connection', (ws) => { 
  console.log('Server rasb connected');
  ws.onmessage = (message) => {
    console.log('Received message from  APP server :', message.data);
    // Process message and potentially send responses through the WebSocket
    ws.send('Message received from serverA'); // Example response

  };
});

