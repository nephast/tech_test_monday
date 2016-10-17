var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var data = [];

app.get('/get', function (req, res) {
  res.render('get', {data: data});
});

app.post('/set', function (req, res) {
  var key =  req.body.key;
  var value = req.body.value;
  data.push(key);
  data.push(value);
  res.redirect("/get");
});

app.listen(4000, function () {
  console.log('app running!');
});
