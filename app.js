/*  File name: app.js
    Author's name: Tilakbhai Suthar
    Student Number: 200393400
    Website name: https://tilaksuthar.herokuapp.com/
    This is the app javascript file which is created by the express generator while creating the view templates for the website. This file is attached with the node js command prompt.
    References for the file: https://github.com/Naismith/comp2068-f2019-week08/blob/master/app.js
*/
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
var User = require('./models/user');


var app = express();

mongoose.connect(
  'mongodb+srv://test:test@cluster0-dp7bd.mongodb.net/test?retryWrites=true&w=majority',
  {useNewUrlParser: true, useUnifiedTopology: true}    
);

var db = mongoose.connection;

db.on('error', () => console.log('There was a error connecting to MongoDB'));
db.once('open', () => console.log('We have connected to MongoDB'));

var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');


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

app.use(                    // using express session for the application 
  session({ 
  secret: 'important', 
  resave: false, 
  saveUninitialized: true })
);

app.use(flash());         // using flash for the application

app.use(passport.initialize());  //intializing passport for the app
app.use(passport.session());     //initalizing session for the passport js

passport.use(new LocalStrategy(User.authenticate()));  //using local strategy for user authentication
passport.serializeUser(User.serializeUser());         //serializing user through passport js
passport.deserializeUser(User.deserializeUser());     //deserializing user through passport js

//Logging into session and authentication
app.use((req, res, next) => {
  res.locals.isLoggedIn = req.isAuthenticated();
  res.locals.user = req.user;

  if (req.isAuthenticated()) {
    res.locals.role = req.user.role;
  } else {
    res.locals.role = null;
  }

  next();
});

app.use('/', authRouter); //routing it to authRouter
app.use('/', indexRouter); //routing it to indexRouter
app.use('/users', require('./routes/users')); //routing it to userRouter


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
