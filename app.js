var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var history = require('connect-history-api-fallback');

// Commented old code to test solution - Remove this if solution works on cloud
// var indexRouter = require('./routes/index');

var customersRouter = require('./routes/customers');
var productsRouter = require('./routes/products');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/customers', customersRouter);
app.use('/api/products', productsRouter);
app.use(history({
    verbose: true
}));
// Commented our code to test solution - Remove this if solution works on cloud
// app.use('/', indexRouter);

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', function (req,res) {
    res.sendFile(path + "index.html");
});

module.exports = app;
