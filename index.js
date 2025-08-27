// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/whoami', function (req, res) {
  let ipaddress = req.headers['x-forwarded-for'] || 
                  req.connection.remoteAddress || 
                  req.socket.remoteAddress ||
                  req.ip || '';
  
  if (ipaddress) {
    ipaddress = ipaddress.split(',')[0].trim();
    if (ipaddress.startsWith('::ffff:')) {
      ipaddress = ipaddress.replace('::ffff:', '');
    }
  }

  // Get language - properly parse Accept-Language header
  let language = req.headers['accept-language'] || '';
  if (language) {
    // Split by comma, take first, then split by semicolon and take first part
    language = language.split(',')[0].split(';')[0].trim();
  }

  // Get software (User-Agent)
  const software = req.headers['user-agent'] || '';

  // Send response with no-cache headers
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  });
  
  res.json({
    ipaddress: ipaddress,
    language: language,
    software: software
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
