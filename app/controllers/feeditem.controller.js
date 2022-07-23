'use strict';

const feeditemModel = require('../models/feeditem.model');

module.exports.add = async (item) => {
    try {
        let ret = await feeditemModel.create(item);
        return ret;
    }
    catch (err) {
        console.err("Something went wrong");
    }
}