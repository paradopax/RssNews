'use strict';

const subscriberModel = require('../models/subscriber.model');

const ERRORS = {
    generic: "Something went wrong"
}

module.exports.follow = async (req, res) => {
    // create a follow
    
    let user = req.user;
    let source = req.joivalid;

    let add = {
        UserId: user.id,
        SourceId: source.sourceId,
        notification: source.notification
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
    let user = req.user;
    let source = req.joivalid;

    let remove = {
        UserId: user.id,
        SourceId: source.sourceId
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