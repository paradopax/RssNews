'use strict';

const { DataTypes } = require('sequelize');
const sequelize = require('../../database').sequelize;

const UserCategory = sequelize.define('UserCategory',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'UserCategories',
    }
);

module.exports = UserCategory;
