var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hi there!');
});
app.get('/bye', function(req, res){ 
    res.send('goodbye');
});
app.get('/dog', function(req, res){ 
    res.send('meow');
});
app.listen(3050, process.env.IP, function() {
    console.log('serever has started!');
});