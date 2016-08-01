var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//mongoose.connect('mongodb://databaseuser:herokupassword@ds031835.mlab.com:31835/heroku_gjm7qs3c');
var messageSchema = new Schema({
    username: String,
    message: String
},{collection: 'messages'});

module.exports = mongoose.model('message', messageSchema );