'use strict';

const dotenv = require('dotenv');
dotenv.config();

const database = require('./database');

module.exports.init = () => {
    return new Promise(async (resolve, reject) => {
        try {
            await database.start();
            resolve();
        }
        catch(err) {
            reject();
        }
    })
}