/*  File name: app.js
    Author's name: Tilakbhai Suthar
    Student Number: 200393400
    Website name: https://tilaksuthar.herokuapp.com/
    This is the app javascript file which is created by the express generator while creating the view templates for the website. This file is attached with the node js command prompt.
*/
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use((req, res, next) => {               //res.locals using the input to display it on the required pages
  res.locals.title_index = 'Tilak Suthar';
  next();
});

app.use((req, res, next) => {             //res.locals using the input to display it on the required pages
  res.locals.title_projects = 'Projects';
  next();
});

app.use((req, res, next) => {           //res.locals using the input to display it on the required pages
  res.locals.title_contact = 'Contact';
  next();
});

app.use((req, res, next) => {           //res.locals using the input to display it on the required pages
  res.locals.title_services = 'Services';
  next();
});

app.use((req, res, next) => {             //res.locals using the input to display it on the required pages
  res.locals.title_about = 'About Me';
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
