const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quoteController');

/* GET users listing. */
// specifies a route on the express.Router object
// this route will be used when a URL of /api/ is received.
router.get('/', quoteController.getQuote);

module.exports = router;
