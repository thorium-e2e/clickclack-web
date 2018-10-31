#!/usr/bin/env node

/**
 * routes/clacks.js
 *
 * Routes for clacks
 *
 * author: apothuaud
 */

/**
 * Module dependencies.
 */
var express = require('express');
var router = express.Router();
var request = require('request');

/**
 * Variables
 */
// API URI
// set env variable in production
// local in development
API_URI = process.env.API_URI || "http://localhost:5000";

/**
 * List all clacks.
 *
 * make a get request to the dedicated api /clacks
 * renders clacks page with clacks object (response body)
 */
router.get('/', function(req, res, next) {
  // call to api /clacks
  debug("GET /clacks");
  request.get(
    { url: API_URI + "/clacks" },
    function(error, response, body) {
        debug("Request to : " + API_URI + "/clacks");
        if (!error && response.statusCode == 200) {
          // parse to JSON
          publicBody = JSON.parse(body);
          // render page
          res.render( 'clacks', { "clacks": publicBody } );
        } else {
            debug(err);
          // render error page
          res.render('error', {
            "error": {
              "stack": process.env.DEV || process.env.REC ?
              error : "error stack is hidden",
              "status": "API Call Failed"
            },
            "message": "Unable to find clacks"
          })
        }
  });
});

/**
 * GET clacks create.
 *
 * Renders the form page.
 */
router.get('/create', function(req, res, next) {
  // render form
  res.render( 'create-clack', { } );
});

/**
 * POST clacks
 *
 * Functional
 * need comments
 */
router.post('/', function(req, res, next) {
  body = Object();
  if(Array.isArray(req.body.keys)){
    for (var i = 0; i < req.body.keys.length; i++) {
      body[req.body.keys[i]] = req.body.values[i];
    }
  } else {
    body[req.body.keys] = req.body.values;
  }
  body = JSON.parse(JSON.stringify(body));
  request({
    url: API_URI + '/clacks',
    method: "POST",
    json: body
  }, function(err, req2, res2) {
    if(err) throw err;
    res.redirect('/clacks');
  });
});

/* DELETE Clack */
router.get('/:id/delete', function(req, res, next) {
  request({
    url: API_URI + "/clacks/" + req.params.id,
    method: "DELETE"
  }, function(err){
    if(err) throw err;
    res.redirect('/clacks');
  });
});

/* Update Clack print form */
router.get('/:id/update', function(req, res, next) {
  request({
    url: API_URI + "/clacks/" + req.params.id,
    method: "GET"
  }, function(err, req2, res2){
    if(err) throw err;
    console.log(res2);
    res.render('update-clack', { "clack": JSON.parse(res2) });
  });
});

/* Update Clack make request */
router.post('/:id', function(req, res, next) {
  body = Object();
  if(Array.isArray(req.body.keys)){
    for (var i = 0; i < req.body.keys.length; i++) {
      body[req.body.keys[i]] = req.body.values[i];
    }
  } else {
    body[req.body.keys] = req.body.values;
  }
  body = JSON.parse(JSON.stringify(body));
  request({
    url: API_URI + '/clacks/' + req.params.id,
    method: "PUT",
    json: body
  }, function(err, req2, res2) {
    if(err) throw err;
    res.redirect('/clacks');
  });
});

// EXPORT
module.exports = router;
