var express = require('express');
var router = express.Router();

/* GET clicks listing. */
router.get('/', function(req, res, next) {
  res.render('clicks', {  });
});

module.exports = router;
