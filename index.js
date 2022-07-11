'use strict';

const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 8000;

const database = require('./database');
const app = require('./app/app');

database.checkConnection()
    .then(data => {
        console.log("Database connect!")
        app.listen(PORT, () => {
            console.log(`Server listening on ${PORT}`);
        });
    })
    .catch(err => {
        console.log(err);
        process.exit(-1);
    });