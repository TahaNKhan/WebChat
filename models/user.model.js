var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//mongoose.createConnection('mongodb://databaseuser:herokupassword@ds031835.mlab.com:31835/heroku_gjm7qs3c');

var usersSchema = new Schema({
    fullname: String,
    username: String,
    password: String,
    email: String
},{collection:'Users'});

module.exports = mongoose.model('users', usersSchema );