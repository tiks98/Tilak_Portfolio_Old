/*  File name: contacts.js
    Author's name: Tilakbhai Suthar
    Website name: https://tilaksuthar.herokuapp.com/
    This is the contact javascript file contains the post route and error handling.
    References for the file: https://github.com/Naismith/comp2068-f2019-week09
*/
var express = require("express");
var router = express.Router();
var Contact = require("../models/contact");

router.post("/contact", async (req, res, next) => {
  // Create a new contacts model
  const contact = new Contact(req.body);
  // Save model to DB
  await contact.save();
  // Redirect back to contacts view
  res.redirect("/contact");
});

module.exports = router;
