var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.render('home.ejs');
});

app.listen(3001, process.env.IP, function() {
    console.log('Server is Listening!!!');
});