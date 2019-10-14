/*  File name: index.js
    Author's name: Tilakbhai Suthar
    Student Number: 200393400
    Website name: https://tilaksuthar.herokuapp.com/
    This is the index javascript file which is used as default javascript file for the website. fetching the necessary data from app.js file
*/
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');  //rendering the index file by putting in express router.
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact');  //rendering the index file by putting in express router.
});

/* GET aboutme page. */
router.get('/about_me', function(req, res, next) {
  res.render('about_me'); //rendering the index file by putting in express router.
});

/* GET projects page. */
router.get('/project', function(req, res, next) {
  res.render('projects'); //rendering the index file by putting in express router.
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services'); //rendering the index file by putting in express router.
});

module.exports = router;
