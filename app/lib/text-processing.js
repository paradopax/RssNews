let request = require('request');
let Readability = require('@mozilla/readability').Readability;
let JSDOM = require('jsdom').JSDOM;
let { NodeHtmlMarkdown } = require('node-html-markdown');

let download = (url) => {

    // TODO: download first image

    return new Promise((resolve, reject) => {
        request(url, function (error, response, body) {
            if (error)
                reject(error);
            let bs = body.toString(); // sometimes crash here
            let document = new JSDOM(bs);
            let article = new Readability(document.window.document).parse();
            let result = NodeHtmlMarkdown.translate(
                /* html */ article.content, 
                /* options (optional) */ {}, 
                /* customTranslators (optional) */ undefined,
                /* customCodeBlockTranslators (optional) */ undefined
            )
            resolve(result);
        });
    })
    
}

module.exports = download;