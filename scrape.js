const scrape = require('website-scraper');
const path = require('path');

const options = {
  urls: ['https://pixelframe.design/pokopia-font-logo-generator/'],
  directory: path.join(__dirname, 'src'),
  sources: [
    { selector: 'img', attr: 'src' },
    { selector: 'link[rel="stylesheet"]', attr: 'href' },
    { selector: 'script', attr: 'src' }
  ],
  recursive: true,
  maxDepth: 1, // メインページからリンクされているアセットを取得する程度
  filenameGenerator: 'bySiteStructure',
};

// Start scraping
scrape(options).then((result) => {
    console.log("Scraping completed successfully");
}).catch((err) => {
    console.error("Scraping failed", err);
});
