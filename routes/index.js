var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

/* GET aboutme page. */
router.get('/about_me', function(req, res, next) {
  res.render('about_me');
});

/* GET projects page. */
router.get('/project', function(req, res, next) {
  res.render('projects');
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services');
});

module.exports = router;
