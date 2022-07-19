'use strict';

module.exports.init = async () => {

    const sequelize = require('../../database').sequelize;

    const userModel = require('./user.model');
    const sourceModel = require('./source.model');
    const usercategoryModel = require('./usercategory.model');
    const subscriberModel = require('./subscriber.model');

    await sequelize.sync(/*{ force: true }*/);
    // Manage
    usercategoryModel.belongsTo(userModel);

    // Add new
    sourceModel.belongsTo(userModel);

    // Follow
    sourceModel.belongsToMany(usercategoryModel, { through: subscriberModel });
    usercategoryModel.belongsToMany(sourceModel, { through: subscriberModel });

    console.log("Relationships");
    await sequelize.sync(/*{ force: true }*/);
}