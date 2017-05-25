// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + '/public'));

// use res.render to load up an ejs view file

app.get('/login', function(req, res) {
    res.render('pages/login');
});

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/recover', function(req, res) {
    res.render('pages/recover');
});

app.listen(8081);