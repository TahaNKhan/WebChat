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
    console.log(req.body)
    var newuserinfo = req.body;
    var newuser = new Users({
        username: newuserinfo.username,
        password: sha256(newuserinfo.password+newuserinfo.username),
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
module.exports = router;