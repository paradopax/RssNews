'use strict';

const config = require('./config');
const app = require('./app/app');

const PORT = process.env.PORT || 8000;

config.init()
    .then(data => {
        app.listen(PORT, () => {
            console.log(`Server listening on ${PORT}`);
        });
    })
    .catch(err => {
        console.log(err);
        process.exit(-1);
    });