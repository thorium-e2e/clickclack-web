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
var debug = require('debug')('clickclack-web');

/**
 * Variables
 */
// API URI
// set env variable in production
// local in development
API_URI = process.env.API_URI || "http://localhost:5000";
debug("API_URI is " + API_URI);

/**
 * List all clacks.
 *
 * make a get request to the dedicated api /clacks
 * renders clacks page with clacks object (response body)
 */
router.get('/', function(req, res, next) {
  debug("server receives a request", "GET /clacks");
  // call to api /clacks
  request.get(
    { url: API_URI + "/clacks" },
    function(error, response, body) {
      debug("server interacts with API", "GET API_URI/clacks");
      if (!error && response.statusCode == 200) {
        // parse to JSON
        publicBody = JSON.parse(body);
        debug("server interacts with API", "Found " + publicBody.length + " clacks");
        // render page
        res.render( 'pages/clacks-list', { "clacks": publicBody, "enableClearAll": true } );
      } else {
        // render error page
        res.render('pages/error', {
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

router.get('/delete', function(req, res, next) {
  debug("server receives a request", "GET /clacks/delete_all_confirm");
  res.render("pages/clacks-delete-all");
});

router.get('/delete/confirm', function(req, res, next) {
  debug("server receives a request", "GET /delete_all");
  request({
    url: API_URI + "/clacks",
    method: "DELETE"
  }, function(err, req2, res2){
    debug("server interacts with API", "DELETE API_URI/clacks");
    if(err) throw err;
    debug("API responds to the server", res2);;
    res.redirect('/clacks');
  });
});

/**
 * GET clacks create.
 *
 * Renders the form page.
 */
router.get('/create', function(req, res, next) {
  debug("server receives a request", "GET /clacks/create");
  // render form
  res.render( 'pages/clacks-create', { } );
});

/**
 * POST clacks
 *
 * Functional
 * need comments
 */
router.post('/', function(req, res, next) {
  debug("server receives a request", "POST /clacks");
  body = Object();
  if(Array.isArray(req.body.keys)){
    for (var i = 0; i < req.body.keys.length; i++) {
      if(req.body.keys[i] && req.body.keys[i] !== ''){
        body[req.body.keys[i]] = req.body.values[i];
      }
    }
  } else {
    if(req.body.keys && req.body.keys !== ''){
      body[req.body.keys] = req.body.values;
    }
  }
  body = JSON.parse(JSON.stringify(body));
  request({
    url: API_URI + '/clacks',
    method: "POST",
    json: body
  }, function(err, req2, res2) {
    debug("server interacts with API", "POST API_URI/clacks with body " + body);
    if(err) throw err;
    debug("API responds to the server", res2);;
    res.render( 'pages/clacks-create-confirm', { "clack": res2 } );
  });
});

/* DELETE Clack */
router.get('/:id/delete', function(req, res, next) {
  debug("server receives a request", "GET /clacks/" + req.params.id + "/delete_confirm");
  request({
    url: API_URI + "/clacks/" + req.params.id,
    method: "GET"
  }, function(err, req2, res2){
    debug("server interacts with API", "GET API_URI/clacks/" + req.params.id);
    if(err) throw err;
    debug("API responds to the server", res2);;
    res.render('pages/clacks-delete', { "clack": JSON.parse(res2) });
  });
});

/* Confirm DELETE Clack */
router.get('/:id/delete/confirm', function(req, res, next) {
  debug("server receives a request", "GET /clacks/" + req.params.id + "/delete");
  request({
    url: API_URI + "/clacks/" + req.params.id,
    method: "DELETE"
  }, function(err, req2, res2){
    debug("server interacts with API", "DELETE API_URI/clacks/" + req.params.id);
    if(err) throw err;
    debug("API responds to the server", res2);;
    res.redirect('/clacks');
  });
});

/* Update Clack print form */
router.get('/:id/update', function(req, res, next) {
  debug("server receives a request", "GET /clacks/" + req.params.id + "/update");
  request({
    url: API_URI + "/clacks/" + req.params.id,
    method: "GET"
  }, function(err, req2, res2){
    debug("server interacts with API", "GET API_URI/clacks/" + req.params.id);
    if(err) throw err;
    debug("API responds to the server", res2);;
    res.render('pages/clacks-update', { "clack": JSON.parse(res2) });
  });
});

/* Update Clack make request */
router.post('/:id', function(req, res, next) {
  debug("server receives a request", "POST /clacks/" + req.params.id);
  debug("server manipulates data", ": form params => Object => JSON String !");
  body = Object();
  if(Array.isArray(req.body.keys)){
    for (var i = 0; i < req.body.keys.length; i++) {
      body[req.body.keys[i]] = req.body.values[i];
    }
  } else {
    body[req.body.keys] = req.body.values;
  }
  body = JSON.parse(JSON.stringify(body));
  debug("server manipulates data", body);
  request({
    url: API_URI + '/clacks/' + req.params.id,
    method: "PUT",
    json: body
  }, function(err, req2, res2) {
    debug("server interacts with API", "PUT API_URI/clacks/" + req.params.id + " with body: " + body);
    if(err) throw err;
    debug("API responds to the server", res2);;
    res.redirect('/clacks');
  });
});

/**
 * get a clack details.
 *
 * make a get request to the dedicated api /clacks/id
 * renders clack details page with clack object (response body)
 */
router.get('/:id/details', function(req, res, next) {
  debug("server receives a request", "GET /clacks/" + req.params.id + "/details");
  request.get(
    { url: API_URI + "/clacks/" + req.params.id },
    function(error, response, body) {
      debug("server interacts with API", "GET API_URI/clacks/" + req.params.id);
      if (!error && response.statusCode == 200) {
        debug("server interacts with API", "Found 1 clacks");
        // render page
        res.render( 'pages/clacks-details', { "clack": JSON.parse(response.body) } );
      } else {
        // render error page
        res.render('pages/clacks-details', {
          "clack": null,
          "error": {
            "stack": process.env.DEV || process.env.REC ?
            error : "error stack is hidden",
            "status": "API Call Failed"
          },
          "message": "Unable to find clack with id" + req.params.id
        })
      }
  });
});

// EXPORT
module.exports = router;
