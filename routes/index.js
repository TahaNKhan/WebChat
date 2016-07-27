var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Login'
    });
});
router.get('/userhome', function (req, res) {
    res.render('chatapp', {title: "TTChatApp"})
});
//user stuff
router.use(require('./users'));
module.exports = router;