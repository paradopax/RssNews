const FeedItem =  require('./feed-item');

const RssFeedEmitter = require('rss-feed-emitter');

class RssMagager {
    feedSources = {};
    feeder = new RssFeedEmitter({
        skipFirstLoad: false
    });

    constructor() {
        this.feeder.on('error', err => {
            console.err(err);
        });
    }

    add(url, id) {
        this.feedSources[url] = id;
        this.feeder.add({
            url: url,
            refresh: 1000 * 60 * 5
        });
    }
}

const manager = new RssMagager;

manager.feeder.on('new-item', async (item) => {
    let sourceId = manager.feedSources[item.meta.link];
    let fi = new FeedItem(item, sourceId);
    await fi.loadContent();
    await fi.store();
    delete fi;
});

module.exports = manager;