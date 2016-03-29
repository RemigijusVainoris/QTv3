var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/pages');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('quote/random', ctrlMain.random);
router.post('/submitQuote', ctrlMain.submitQuote);

module.exports = router;
