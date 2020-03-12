/*
	File name: contact.js
	Author's name: Tilakbhai Suthar
	Website name: https://tilaksuthar.herokuapp.com/
	This is the contact.js file. Schema of contact us is defined on which contact.pug is supported.
	
*/
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the contact Schema
const contactSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  }
});

// Create the model based on the above schema
const contact = mongoose.model("Contact", contactSchema);

module.exports = contact;
