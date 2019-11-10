/*  File name: auth.js
    Author's name: Tilakbhai Suthar
    Student Number: 200393400
    Website name: https://tilaksuthar.herokuapp.com/
    This is the auth javascript file which is used as an authentication javascript file for the website. fetching the necessary data from app.js, and mongoose database from mongo DB file
    References for the file: https://github.com/Naismith/comp2068-f2019-week09/blob/master/routes/auth.js
*/
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');

// Routings for Authentication Process

// Route 1 -> Login Page
router.get('/login', (req, res, next) => {
  res.render('auth/login', { error: req.flash('error') });
});

// Route 2 -> Login Form Submission through POST Method.
router.post(
  '/login',
  passport.authenticate('local', {
    failureFlash: 'There is an issue with your username or password, If you have not registered yet then head to Register Page!',
    failureRedirect: '/login',
    successRedirect: '/'
  })
);

// Route 3 -> Routing to register page
router.get('/register', (req, res, next) => {
  res.render('auth/register', {});
});

// Route 4 -> Register Form Submission through POST Method.
router.post('/register', (req, res, next) => {
  // Registering the account using passport-local-mongoose
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    function(err, account) {
      if (err) {
        // If error occurs then this will re render the register page
        console.log(err);
        return res.render('register', { account: account });
      }

      // if Login is successful then this will redirect the page to LOGIN page
      passport.authenticate('local')(req, res, function() {
        res.redirect('/');
      });
    }
  );
});

// Route 5 -> Routing the Logout page to the Index page after destroying the session.
router.get('/logout', (req, res, next) => {
    // Destroying the session at the end
    req.session.destroy(() => {
      // redirecting to the Index page after destroying the session.
      res.redirect('/');
    });
  });

module.exports = router;
