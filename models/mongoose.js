var mongoose = require('mongoose');

var Schema = mongoose.Schema;

mongoose.connect('mongodb://databaseuser:herokupassword@ds031835.mlab.com:31835/heroku_gjm7qs3c');

Users = require('./user.model');
messages = require('./message.model');

module.exports = mongoose;