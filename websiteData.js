const websites = [
  {
    endpoint : 'https://www.barcodelookup.com/',
    selector : {
      name : '.product-details h4',
      description : '.product-meta-data .product-text-label span.product-text'
    }
  },
  {
      endpoint : 'https://www.buycott.com/upc/',
      selector :{
        name : '.container_header h2',
        description : '.product_info_table'
      }
    },
  // {
  //   endpoint : 'https://www.barcodespider.com/',
  //   selector :{
  //     name : '.detailtitle h2',
  //     description : '.barcode-data table'
  //   }
  // }
  // 
  // Here can add more website and element selector
  ];
module.exports = websites;