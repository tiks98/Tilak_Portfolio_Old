/*  File name: user.js
    Author's name: Tilakbhai Suthar
    Student Number: 200393400
    Website name: https://tilaksuthar.herokuapp.com/
    This is the user javascript file which is used as user's connection to the mongoose database for the website. fetching the necessary data from app.js, and mongoose database from mongo DB file
    References for the file: https://github.com/Naismith/comp2068-f2019-week08/blob/master/models/user.js
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

// Creating a new User Schema
const userSchema = new Schema({});

// Using the plugin provided between passport local and mongoose
userSchema.plugin(passportLocalMongoose);


// Creating a user through the schema created above
const user = mongoose.model('User', userSchema);

module.exports = user;