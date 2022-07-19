'use strict';

const { DataTypes } = require('sequelize');
const sequelize = require('../../database').sequelize;

const Subscriber = sequelize.define('Subscriber',
    {
        notify: {
            type: DataTypes.BOOLEAN,
            defaultValue: false // push notification
        }
    },
    {
        tableName: 'Subscribers',
        updatedAt: false
    }
);

module.exports = Subscriber;