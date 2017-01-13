// Read library
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// body-parser settings
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var router = require('./routes/v1/');
app.use('/api/v1/', router);

// Start server
app.listen(port);
console.log('Listen on port ' + port);