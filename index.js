const path = require('path');
const express = require('express');
const app = express();
const SocketIo = require('socket.io');

//settings server
app.set('port',process.env.PORT || 3000);
app.use(express.static(path.join(__dirname,'public')));

//para iniciar el server
const server = app.listen(app.get('port'),() => {
    console.log('server on port', app.get('port'));
})

//iniciar un socketIO con el servidor ya iniciado
const io = SocketIo.listen(server)

//websockets funciones
io.on('connection', (socket) => {
    console.log('new connection con id: ',socket.id);

    socket.on('chat:message', (data) => {
        console.log(data);
        io.sockets.emit('chat:message',data);
    })
})

