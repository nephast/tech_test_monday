var express = require('express');
var app = express();

app.get('/get', function (req, res) {
  res.send('get the result here');
});

app.post('/set', function (req, res) {
  res.send('post the params here');
});

app.listen(4000, function () {
  console.log('app running!');
});
