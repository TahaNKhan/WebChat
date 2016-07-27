var express = require('express');
var router = express.Router();
var passport = require('../passport/auth');
var mongoose = require('../models/mongoose');
var sha256 = require('js-sha256').sha256;
/* GET users listing. */
router.get('/register', function (req, res, next) {
    res.render('register', {
        title: 'Register'
    });
});
router.post('/register', function (req, res, next) {
    console.log(req.body)
    var newuserinfo = req.body;
    var newuser = new User({
        username: newuserinfo.username
        , password: newuserinfo.password
        , fullname: newuserinfo.fullname
        , email: newuserinfo.email
    });

    newuser.save(function (err, res2) {
            
        if (err){ res2.send(err);}
        else{ res2.send('registered');
            console.log(newuser);}
    });
});
router.post('/login', passport.authenticate('local', {
    successRedirect: '/userhome'
    , failureRedirect: '/login'
}));
module.exports = router;