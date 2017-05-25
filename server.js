// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + '/public'));

// use res.render to load up an ejs view file

// index page
app.get('/login', function(req, res) {
    res.render('login');
});

// about page
app.get('/home', function(req, res) {
    res.render('index.html');
});

app.listen(8081);