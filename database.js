'use strict';

const { Pool } = require('pg');
// pools will use environment variables
// for connection information

var pool = new Pool();

// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
let errorCallback = (err, client) => {
    throw(new Error('Unexpected error on idle client', err));
};

module.exports.getDB = () => {
    if (pool) return pool;
    throw(new Error("Database not connected"));
};

module.exports.connect = () => {
    return new Promise(async (resolve, reject) => {
        try {
            await pool.connect();
            pool.on('error', errorCallback);
            console.log("Database connected");
            resolve(pool);
        }
        catch (err) {
            reject(err);
        }
    });
}
