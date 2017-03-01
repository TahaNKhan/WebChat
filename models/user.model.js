var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var usersSchema = new Schema({
    fullname: String,
    username: String,
    password: String,
    email: String
},{collection:'Users'});

module.exports = mongoose.model('users', usersSchema );
