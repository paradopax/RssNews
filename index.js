'use strict';

const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 8000;

const http = require('http');
const database = require('./database');
const app = require('./app/app');
const server = http.createServer(app);
const socketio = require('./socket')(server);

database.checkConnection()
    .then(data => {
        console.log("Database connect!")
        server.listen(PORT, () => {
            console.log(`Server listening on ${PORT}`);
        });
    })
    .catch(err => {
        console.log(err);
        process.exit(-1);
    });