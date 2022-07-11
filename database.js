'use strict';

const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    process.env.PGDATABASE,
    process.env.PGUSER,
    process.env.PGPASSWORD,
    {
        host: process.env.PGHOST,
        port: process.env.PGPORT,
        dialect: 'postgres',
        logging: false
    }
);

module.exports.checkConnection = () => {
    return new Promise(async (resolve, reject) => {
        try {
            await sequelize.authenticate();
            await sequelize.sync();
            resolve();
        } catch (error) {
            reject(error);
        }
    });    
};

module.exports.sequelize = sequelize;