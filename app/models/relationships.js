'use strict';

let foreignKeyNullConstraint = {
    foreignKey: {
        allowNull: false
    }
};

module.exports.init = async () => {

    const sequelize = require('../../database').sequelize;

    const userModel = require('./user.model');
    const sourceModel = require('./source.model');
    const usercategoryModel = require('./usercategory.model');
    const subscriberModel = require('./subscriber.model');
    const feeditemModel = require('./feeditem.model');
    
    // Manage
    userModel.hasMany(usercategoryModel, foreignKeyNullConstraint);

    // Add new
    userModel.hasMany(sourceModel, foreignKeyNullConstraint);

    // Follow
    sourceModel.belongsToMany(usercategoryModel, { through: subscriberModel });
    usercategoryModel.belongsToMany(sourceModel, { through: subscriberModel });

    // Publish
    sourceModel.hasMany(feeditemModel, foreignKeyNullConstraint);

    console.log("Relationships");
    await sequelize.sync(/*{ force: true }*/);
}