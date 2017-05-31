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

app.get('/register', function(req, res) {
    res.render('pages/register');
});

app.get('/register-final-step', function(req, res) {
    res.render('pages/register-final-step');
});

app.get('/open-account', function(req, res) {
    res.render('pages/co/open-account');
});

app.get('/transfers', function(req, res) {
    res.render('pages/co/transfers');
});

app.get('/open-account', function(req, res) {
    res.render('pages/co/open-account');
});

app.get('/deposit', function(req, res) {
    res.render('pages/co/deposit');
});

app.get('/history', function(req, res) {
    res.render('pages/co/history');
});

app.get('/withdrawal', function(req, res) {
    res.render('pages/co/withdrawal');
});

app.get('/platforms', function(req, res) {
    res.render('pages/co/platforms');
});

app.get('/contest', function(req, res) {
    res.render('pages/co/contest');
});

app.get('/withdrawal', function(req, res) {
    res.render('pages/co/withdrawal');
});

app.get('/contact', function(req, res) {
    res.render('pages/co/contact');
});


app.listen(3030);
console.log('App started on port 3030');