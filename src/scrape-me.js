/**
 * The single job for this module is to determine which Puppeteer instance we should use for the current product search
 * 
 * So far it works...
 */

require('dotenv').config();
const searchData = JSON.parse(process.env.SEARCH_DATA);     // dummy-data para probar.

const scrapear = require("./productProviders/cetrogar");

const searchData = JSON.parse(process.env.SEARCH_DATA);     // dummy-data para probar.

console.log(searchData.provider);

scrapear(searchData.provider);