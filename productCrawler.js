const puppeteer = require('puppeteer');

const navigationTimeout = 30000; // 30s
/*
* crawling data from website url
* @param barcode string|numberic
* @param website string
* return json | null
*/
async function crawlBarcode(barcode, website) {
  
  const searchURL = `${website.endpoint}${barcode}`;
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  try {
    await page.goto(searchURL, { timeout: navigationTimeout });
      const productName = await page.$eval(website.selector.name, (element) => element.innerText);
      const productDescription = await page.$eval(website.selector.description, (element) => element.innerText);

      const product = {
        barcode,
        name: productName,
        description: productDescription
      };

    await browser.close();
    return product;
  } catch (error) {
      await browser.close();
      return null;
  }
}

module.exports = crawlBarcode;
