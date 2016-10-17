var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get('/get', function (req, res) {
  var data = ["test", "hello"];
  res.render('get', {data: data});
});

app.post('/set', function (req, res) {
  console.log(req.body);
  res.send("post route");
});

app.listen(4000, function () {
  console.log('app running!');
});
