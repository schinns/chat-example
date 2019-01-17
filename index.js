var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
});

app.get('/index.js', (req, res) => {
  res.sendFile(__dirname + '/public/index.js')
})

app.get('/index.css', (req, res) => {
  res.sendFile(__dirname + '/public/index.css')
})

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(port, () => console.log(`listening on port ${port}`))
