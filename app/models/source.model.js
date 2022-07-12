'use strict';

const { DataTypes } = require('sequelize');
const sequelize = require('../../database').sequelize;

const Source = sequelize.define('Source',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: 'Sources'
    }
);

const userModel = require('./user.model');
Source.belongsTo(userModel);

module.exports = Source;
