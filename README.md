# Backend
## Description
- Find the Product's name and Product's description
- If can't find both name and description, search from next website

## Running this task
### Please do below steps by steps
- `npm install`  //building node_modules
- `npm start`    //running task
## Successful task
- Get the barcodes list 
- List of the websites to crawl from
- Finds the product names and product descriptions using barcode numbers

## Configuration
- Getting the barcodes program is in `/barcodeData.js`
- Listing the websites is in `/websiteData.js`
- Crawling data program is in `/productCrawler.js`

## Adding new website
- add new website link and configure the element selector in `/websiteData.js`
    - Define the selector element , sample as below : 
    ```html
         {
            endpoint : '<<website_endpoint>>',
            selector : {
              name : '<<name_selector>>',
              description : '<<description_selector>>'
            }
          },
    ```
