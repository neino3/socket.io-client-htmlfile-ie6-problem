var app = require('express').createServer();
var listen_port = 8080;
var net     = require('net');
var io = require('socket.io').listen(app);
app.listen(listen_port);
console.log('server listening on ' + listen_port);

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});
app.get('/jquery.min.js', function (req, res) {
    res.sendfile(__dirname + '/jquery.min.js');
});

io.sockets.on('connection', function(socket) {
    console.info('connected: ' + socket.id + ' by ' + socket.transport);
    socket.on('message', function(msg) {
        console.info('receive:' + msg);
    });
    socket.on('disconnect', function(reason) {
        console.log('disconnected');
    });
});

