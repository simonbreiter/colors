'use strict';
var express = require('express');
var app = express();
var colors = require('./colors.json');

app.use('/public', express.static(__dirname + '/public'));

app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index', {'colors': colors});
});

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});

