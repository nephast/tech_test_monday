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
  res.redirect("/result");
});

app.post('/get', function (req, res) {
  var result = req.body.result;
  if (result == data[0]) {
  //  res.render('get', {data: data});
    res.render('get', {data: data[1]};
  } else {
  res.redirect("/result");
  }
});

app.get('/result', function (req, res) {
  res.render("result");
});

app.listen(4000, function () {
  console.log('app running!');
});
