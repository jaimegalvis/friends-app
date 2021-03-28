const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Yo debo darte la lista de amigos');
});

module.exports = router;