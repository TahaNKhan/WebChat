var express = require('express');
var router = express.Router();
var passport = require('../passport/auth');
var mongoose = require('../models/mongoose');
var sha256 = require('js-sha256');
/* GET users listing. */
router.get('/register', function (req, res, next) {
    res.render('register', {
        title: 'Register'
    });
});
router.post('/register', function (req, res, next) {

    var newuserinfo = req.body;
    var newuser = new Users({
        username: newuserinfo.username,
        password: sha256(newuserinfo.password + newuserinfo.username),
        fullname: newuserinfo.fullname,
        email: newuserinfo.email
    });

    newuser.save(function (err) {
        if (err) {
            res.send(err);
        } else {

            console.log(newuser);
            res.send('registered');
        }
    });
});
router.post('/login', passport.authenticate('local', {
    successRedirect: '/userhome',
    failureRedirect: '/login'
}));

router.get('/logout', function (req, res) {
    req.logout();
    delete req.user;
    res.redirect('/');
});
router.get('/messages', function (req, res) {
    if (req.user) {
        messages.find({}).sort({'date':'desc'}).limit(10).exec(function (err, messages) {
            res.render('messages', {
                messages: messages.reverse()
            })
        })
    } else {
        res.redirect('/');
    }
});
router.put('/messages/send/:message', function (req, res) {
    message = new messages({
        username: req.user.username,
        message: req.params.message,
        date : new Date()
    })
    message.save();

});

module.exports = router;