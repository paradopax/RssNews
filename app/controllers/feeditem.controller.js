'use strict';

const channel = require('../lib/channel');
const feeditemModel = require('../models/feeditem.model');

module.exports.add = async (item) => {
    try {
        let ret = await feeditemModel.create(item);
        channel.emit('new-item', ret.toJSON());
        return ret;
    }
    catch (err) {
        console.log("Something went wrong");
    }
}