const request = require('request');
const fs = require("fs");

const domainName = process.argv[2]
const path = process.argv[3]

request(domainName, (error, response, body) => {
  if (error) {
    console.log('error', error);
  }
  fs.writeFile(path, body, function(error) {
    const contentLength = response.headers['content-length'];
    if (error) {
      console.log('error', error);
    } else {
      console.log('Downloaded and saved ${contentLength} bytes to ${path}')
    };
  });
});