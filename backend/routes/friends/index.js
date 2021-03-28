const express = require('express');
const router = express.Router();
var debug = require('debug')('backend:friend-router');

//controllers
const Friends = require( '../../controllers/Friends')

let Friend = new Friends()

let friendsList = Friend.getFriends()


/* GET friends listing. */
router.get('/', function(req, res, next) {
    res.setHeader('content-type', 'application/json');
    res.send(JSON.stringify(friendsList));
});

router.post('/add', function(req, res, next) {

});

module.exports = router;