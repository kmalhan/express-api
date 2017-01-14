var express = require('express');
var router = express.Router();

router.use('/article', require('./article.js'));
router.use('/user', require('./user.js'));

// Register as module
module.exports = router;