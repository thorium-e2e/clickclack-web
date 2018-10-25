var express = require('express');
var router = express.Router();
var request = require('request');

/* GET clacks listing. */
router.get('/', function(req, res, next) {
  request.get({ url: "http://localhost:8080/clacks/" }, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      publicBody = JSON.parse(body);
      publicBody.forEach((clack)=>{
        delete clack._id;
      });
      res.render( 'clacks', { "clacks": publicBody } );
    } else {
      res.render('error', {
        "error": {
          "stack": error,
          "status": 404
        },
        "message": "Unable to find clacks"
      })
    }
  });
});

module.exports = router;
