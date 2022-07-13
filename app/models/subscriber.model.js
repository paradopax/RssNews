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

const userModel = require('./user.model');
const sourceModel = require('./source.model');

sourceModel.belongsToMany(userModel, { through: Subscriber });
userModel.belongsToMany(sourceModel, { through: Subscriber });

sequelize.sync();

module.exports = Subscriber;
