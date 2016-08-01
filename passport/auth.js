var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;
var mongoose = require('../models/mongoose');
var sha256 = require('js-sha256');
passport.use('local', new LocalStrategy(function (username, password, done) {
    Users.findOne({
        'username': username
    }, function (err, person) {
        if (err) return handleError(err);
                                                                
        if (person != null && (person.username === username && sha256(password + username) === person.password)) {
            // console.log('password accepted')
            return done(null, {
                username: person.username
            });
        };

        return done(null, false);
    })
}));
passport.serializeUser(function (user, done) {
    console.log(user)
    done(null, user.username);
    
});
passport.deserializeUser(function (username, done) {
    done(null, {
        username: username
    });
});
module.exports = passport;