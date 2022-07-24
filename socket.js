const SocketIO = require('socket.io').Server;
const channel = require('./app/lib/channel');


module.exports = (httpServer) => {
    const io = new SocketIO(httpServer);

    io.on('connection', (socket) => {
        // handle connection
        // TODO check user token
        console.log(socket.id);
    });

    channel.addListener('new-item', (item) => {
        io.emit(item.SourceId, item);
    });

    return io;
}