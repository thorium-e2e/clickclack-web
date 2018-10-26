var express = require('express');
var router = express.Router();
var request = require('request');

/* GET clacks listing. */
router.get('/', function(req, res, next) {
  request.get({ url: "http://localhost:5000/clacks/" }, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      publicBody = JSON.parse(body);
      publicBody.forEach((clack)=>{
        delete clack._id;
      });
      res.render( 'clacks', { "clacks": publicBody } );
    } else {
      res.render('error', {
        "error": {
          "stack": process.env.DEV || process.env.REC ? error : "error stack is hidden",
          "status": "API Call Failed"
        },
        "message": "Unable to find clacks"
      })
    }
  });
});

/* GET clacks create. */
router.get('/create', function(req, res, next) {
  res.render( 'create-clack', { } );
});

/* POST clacks */
router.post('/', function(req, res, next) {
  console.log("Trying to create a new clack with body:");
  console.log(req.body);
  body = Object();
  for (var i = 0; i < req.body.keys.length; i++) {
    body[req.body.keys[i]] = req.body.values[i];
  }
  console.log("Build object:");
  console.log(body);
  request.post({url:'http://localhost:5000/clacks/', form: body}, function(err,httpResponse,body){
    if(err){
      console.log(err);
    }
    console.log("Clack created via API");
    res.redirect('/clacks');
  });
});

module.exports = router;
