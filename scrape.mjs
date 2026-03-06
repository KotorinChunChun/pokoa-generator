import scrape from 'website-scraper';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
  urls: ['https://pixelframe.design/pokopia-font-logo-generator/'],
  directory: path.join(__dirname, 'src'),
  sources: [
    { selector: 'img', attr: 'src' },
    { selector: 'link[rel="stylesheet"]', attr: 'href' },
    { selector: 'script', attr: 'src' }
  ],
  recursive: false,
};

// Start scraping
scrape(options).then((result) => {
    console.log("Scraping completed successfully");
}).catch((err) => {
    console.error("Scraping failed", err);
});
