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

app.get('/r/:subredditName', function(req, res) {
    var subreddit = req.params.subredditName;

    console.log(req.params);
    res.send('WELCOME TO THE ' + subreddit.toUpperCase() + ' SUBREDDIT');
});

// app.get('/r/subredditname');
app.get('/r/:subredditName/comments/:id/:title/', function(req, res) {
    res.send('WELCOME TO THE COMMENTS PAGE!')
});

app.get('/r/music');
app.get('/')

app.get('*', function(req, res) {
    // res.send(`<a href="localhost:3050">HIT THE LINK</a>`);
    // res.render('Hit the link below, your url is wrong');
    res.send(`<a href="/">Hit me!</a>`);
    // res.end();
});

app.listen(3050, process.env.IP, function() {
    console.log('serever has started!');
});