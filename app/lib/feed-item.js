const feeditemController = require('../controllers/feeditem.controller');
const textprocessing = require('./text-processing');

class FeedItem {

    constructor(item, sourceId) {
        this.title = item.title;
        this.description = item.description || "";
        this.summary = item.summary || "";
        this.url = item.link;
        this.date = item.date || item.pubDate || item.pubdate || Date();
        this.sourceID = sourceId;
        this.content = "";
    }
  
    async store() {
        let res = await feeditemController.add(this);
        return res;
    }
  
    async loadContent() {
        // load the content with @mozilla/readbility
        try {
            let res = await textprocessing(this.url);
            this.content = res;
        }
        catch (err) {
            console.log("Can't parse " + this.url);
        }
    }
}

module.exports = FeedItem;