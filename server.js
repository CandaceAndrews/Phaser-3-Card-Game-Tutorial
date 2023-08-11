const server = require('express')();
const http = require('http').createServer(server);
const io = require('socket.io')(http);
const cors = require('cors');

// Enable CORS for all routes
server.use(cors());

io.on('connection', function (socket) {
    console.log('A user connected: ' + socket.id);

    socket.on('disconnect', function () {
        console.log('A user disconnected: ' + socket.id);
    });
});

http.listen(3000, function () {
    console.log('Server started!');
});