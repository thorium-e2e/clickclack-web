var express = require('express');
var router = express.Router();

/* GET commands listing. */
router.get('/', function(req, res, next) {
  res.render('commands', {  });
});

module.exports = router;
