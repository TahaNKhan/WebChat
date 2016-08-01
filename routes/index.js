var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    if (req.user) {
        res.redirect('/userhome');
    } else
        res.render('index', {
            title: 'Login'
        });
});
router.get('/login', function (req, res, next) {
    res.render('index', {
        title: 'Login'
    });
});
router.get('/userhome', function (req, res) {
    if (req.user)
        res.render('chatapp', {
            title: "TTChatApp",
            user: req.user
        })
    else
        res.redirect('/')
});

router.get('/about', function (req, res) {
    if (req.user)
        res.render('about', {
            title: 'About'
        })
    else
        res.redirect('/');
});

//user stuff
router.use(require('./users'));
module.exports = router;