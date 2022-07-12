'use strict';

const sourceModel = require('../models/source.model');

const ERRORS = {
    alreadyIn: "Url already in"
}

module.exports.add = async (req, res) => {
    // add new source
    let user = req.user;
    let urlTest = req.joivalid.url;
    let source = {
        url: urlTest,
        name: "test test",
        description: "ciao",
        UserId: user.id
    }
    // TODO: extract RSS info
    try {
        let ret = await sourceModel.create(source);
        res.status(200).json(ret);
    }
    catch (err) {
        res.status(403).json({
            error: ERRORS.alreadyIn
        })
    }
}