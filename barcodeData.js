const fs = require('fs');
const csv = require('csv-parser');

async function getBarcodesFromCSV() {
  return new Promise((resolve, reject) => {
    const barcodes = [];

    fs.createReadStream('./data/backend-data.csv')
      .pipe(csv())
      .on('data', (data) => {
        const barcode = Number(data['barcode']); // Assuming the column name in the CSV is 'barcode'
        barcodes.push(barcode);
      })
      .on('end', () => {
        resolve(barcodes);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

module.exports = getBarcodesFromCSV;
