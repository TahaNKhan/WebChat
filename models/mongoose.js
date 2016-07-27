var mongoose = require('mongoose');

var Schema = mongoose.Schema;

mongoose.createConnection('mongodb://databaseuser:herokupassword@ds031835.mlab.com:31835/heroku_gjm7qs3c');

User = require('./user.model');
message = require('./message.model');

module.exports = mongoose;