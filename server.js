const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http);
const path = require('path');

const port = process.env.PORT || 3000;

app.use("/board", express.static(__dirname + '/public'));

//app.use("/board", )

// app.get('/board', function(req, res) {
//     res.sendFile(path.join(__dirname, '/public'));
//   });
// app.post("signup", (req, res)=>{

// })

// app.post("/login", )

function onConnection(socket){
//   socket.on('join', (room)=>{
//     socket.join(room)
//     socket.room = room
//   })
  socket.on('drawing', (data) => socket.broadcast.emit('drawing', data));


//   socket.on('join', (roomId) => socket.join(roomId) )
//   socket.on('room-drawing', (data)=>socket.to(data.roomId).broadcast.emit('drawing', data))
}

io.on('connection', onConnection);

http.listen(port, () => console.log('listening on port ' + port));