var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.render('home.ejs');
});

app.get('/fallinlovewith/:thing', function(req, res) {
    var thing = req.params.thing;
    res.render('love.ejs', {thingVAR: thing});
    // res.send('You fell in love with ' + thing);
});
app.get('/posts', function(req, res) {
    var posti = [
        {title: 'Post 1', author: 'Susy'},
        {title: 'My adorable pet bunny', author: 'Charlie'},
        {title: 'Can you believe this pomsky?', author: 'Dini'}
    ];

    res.render('posts.ejs', {posts: posti});
});

app.listen(3001, process.env.IP, function() {
    console.log('Server is Listening!!!');
});