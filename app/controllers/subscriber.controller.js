'use strict';

const subscriberModel = require('../models/subscriber.model');

const ERRORS = {
    generic: "Something went wrong"
}

module.exports.follow = async (req, res) => {
    // create a follow
    let usercategory = req.joivalid;

    let add = {
        SourceId: usercategory.sourceId,
        UserCategoryId: usercategory.categoryId,
        notification: usercategory.notification
    }
    
    try {
        await subscriberModel.create(add);
        res.status(200).json({});
    } catch (err) {
        res.status(403).json({
            error: ERRORS.generic
        });
    }
}

module.exports.unfollow = async (req, res) => {
    // delete a following
    let usercategory = req.joivalid;

    let remove = {
        SourceId: usercategory.sourceId,
        UserCategoryId: usercategory.categoryId
    }
    
    try {
        let result = await subscriberModel.destroy({
            where: remove
        });
        if (result != 0) 
            res.status(200).json({});
        else 
            throw "Nothing found"
    } catch (err) {
        res.status(403).json({
            error: ERRORS.generic
        });
    }
}