var express = require('express');
var app = express();


// app.get('/', function(req, res) {
//     res.send('Hi there,!');
// });
app.get('/', function(req, res) {
    res.send('Hi there, welcome to my assignment!');
});
app.get('/speak/:animal', function(req, res){ 
    var sounds = {
        pig: 'Oink',
        cow: 'Moo',
        dog: 'Woof Woof!',
        cat: 'I hate you human',
        goldfish: '...'
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send('The ' + animal + ' says ' + sound);
});
app.get('/repeat/:message/:times', function(req, res) {
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = '';

    for(var i = 0; i < times; i++) {
        result += message + ' ';
    }
    res.send(result);
    // res.send('Message: ' + message + ' Times: ' + times);
});



// app.get('/r/:subredditName', function(req, res) {
//     var subreddit = req.params.subredditName;

//     console.log(req.params);
//     res.send('WELCOME TO THE ' + subreddit.toUpperCase() + ' SUBREDDIT');
// });

// app.get('/r/subredditname');
// app.get('/r/:subredditName/comments/:id/:title/', function(req, res) {
//     res.send('WELCOME TO THE COMMENTS PAGE!')
// });

app.get('*', function(req, res) {
    res.send('Sorry, page not found... What are you doing with you life?')
});

// app.get('*', function(req, res) {
//     // res.send(`<a href="localhost:3050">HIT THE LINK</a>`);
//     // res.render('Hit the link below, your url is wrong');
//     res.send(`<a href="/">Hit me!</a>`);
//     // res.end();
// });

app.listen(3050, process.env.IP, function() {
    console.log('serever has started!');
});