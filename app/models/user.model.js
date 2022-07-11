'use strict';

const { DataTypes } = require('sequelize');
const sequelize = require('../../database').sequelize;

const User = sequelize.define('User',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        /*since: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }*/
    },
    {
        tableName: 'Users'
    }
);

module.exports = User;
