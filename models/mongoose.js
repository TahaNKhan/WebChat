var mongoose = require('mongoose');

var Schema = mongoose.Schema;

mongoose.connect(process.env.MONGODB_URL);

Users = require('./user.model');
messages = require('./message.model');

module.exports = mongoose;
