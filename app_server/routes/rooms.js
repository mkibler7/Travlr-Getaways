var express = require('express');
var router = express.Router();
var controller = require('../controllers/rooms');

/* GET Rooms page. */
router.get('/', controller.room);

module.exports = router;