'use strict';

const RssMagager = require('../lib/rss-manager');
const Parser = require('rss-parser');

const sourceModel = require('../models/source.model');

const ERRORS = {
    alreadyIn: "Url already in",
    notafeed: "This url is not an RSS feed"
}

async function extractRSSInfo(url)  {
    try {
        let parser = new Parser();
        let feed = await parser.parseURL(url);
        return feed;
    }
    catch (err) {
        return null;
    }
}

module.exports.add = async (req, res) => {
    // add new source
    let user = req.user;
    let url = req.joivalid.url;

    // TODO: extract RSS info
    let feed = await extractRSSInfo(url);
    if (feed == null) {
        res.status(403).json({
            error: ERRORS.notafeed
        });
        return;
    }
    // add the feed to the handler
    let source = {
        url: url,
        name: feed.title,
        description: feed.description,
        language: feed.language | null,
        UserId: user.id
    }

    try {
        let ret = await sourceModel.create(source);
        RssMagager.add(url, ret.id);
        res.status(200).json(ret);
    }
    catch (err) {
        res.status(403).json({
            error: ERRORS.alreadyIn
        });
    }
}