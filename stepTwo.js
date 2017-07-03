const https = require('https');
// console.log(https);


function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
https.get(requestOptions, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  let buffer = '';
  response.on('data', function (chunk) {
    buffer += chunk;
  // console.log(buffer);
  });

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
    // console.log('Chunk Received. Length:', data.length);

    console.log(data += '\n');

  });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
    console.log('Response stream complete.');
  });

});

}
getAndPrintHTML();