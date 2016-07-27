var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;
var mongoose = require('../models/mongoose');
var sha256 = require('js-sha256');
passport.use('local', new LocalStrategy(function (username, password, done) {
    User.findOne({
        'username': username
    }, function (err, person) {
        if (err) return handleError(err);
                                                                
        if (person != null && (person.username === username && sha256(sha256(password))/* dont forget to change this*/ === person.password)) {
            // console.log('password accepted')
            return done(null, {
                fullname: person.fullname
            });
        };

        return done(null, false);
    })
}));
passport.serializeUser(function (user, done) {
    done(null, user.username);
});
passport.deserializeUser(function (username, done) {
    done(null, {
        username: username
    });
});
module.exports = passport;