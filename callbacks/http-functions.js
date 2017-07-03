const https = require('https');

module.exports = function getHTML (options, callback) {
    /* Your code here */


  https.get(options, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    let buffer = '';
    response.on('data', function (chunk) {
      buffer += chunk;
    });
    // the callback is invoked when a `data` chunk is received
    response.on('data', callback/*() {
      // console.log('Chunk Received. Length:', data.length);
      console.log(data += '\n');
    }*/);
    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      // console.log(callback);
      console.log('Response stream complete.');
    });

  });

};