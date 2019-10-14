/*  File name: users.js
    Author's name: Tilakbhai Suthar
    Student Number: 200393400
    Website name: https://tilaksuthar.herokuapp.com/
    This is the users javascript file which is used for the user listings on the website.
*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
