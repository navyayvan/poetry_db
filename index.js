var express = require('express');
var layouts = require('express-ejs-layouts');
var request = require('request');
var app = express();


app.use(layouts);
app.set('view engine', 'ejs');

app.get('/', function(req,res) {
  res.render('index');
})

app.get('/authorresult', function(req,res) {
  request('http://poetrydb.org/author', function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var dataObj = JSON.parse(body);
      console.log(dataObj);
      res.render("authorresult", {result: dataObj});
    }
  });
});


app.listen(3000);