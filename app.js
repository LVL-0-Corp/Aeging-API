var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
const DB_CONFIG = require('./config/db');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var shopsRouter = require('./routes/shops');

var app = express();

mongoose.connect(DB_CONFIG.DB_URL, DB_CONFIG.DB_OPTIONS);
var db = mongoose.connection;

db.on('error', console.error.bind(console, "Database connexion failed"));
db.once('open', function(){
    console.log('Success');
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/shops', shopsRouter);

module.exports = app;
