const crawlBarcode = require('./productCrawler');
const getBarcodesFromCSV = require('./barcodeData');
const websites = require('./websiteData');

async function startCrawling() {
  try {
    const barcodes = await getBarcodesFromCSV();
    const products = [];
    console.log("====================== Start crawling ======================\n");
    for (const barcode of barcodes) {
      for (const website of websites) {
        try {
            const product = await crawlBarcode(barcode, website);
            if(product != null){
              products.push(product);
              //to show the done product with dot
              const message =`Start crawling ${".".repeat(products.length)}`;
              process.stdout.write(`\x1B[0G\x1B[K${message}`);
              break; // Stop crawling other websites if product found
            }
        } catch (error) {
            console.error(`\n\nError crawling barcode ${barcode} from ${website}:`, error);
        }
      }
    }
    console.log("\n\n====================== Finish the crawling ======================\n");
    console.log(products);
    console.log("\n====================== Count : ",products.length,'======================\n');
    process.exit();
  } catch (error) {
      console.error('Error reading barcodes from CSV:', error);
  }
}

startCrawling();
