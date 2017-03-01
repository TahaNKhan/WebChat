var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
    username: String,
    message: String,
    date : Date
},{collection: 'messages'});

module.exports = mongoose.model('message', messageSchema );
