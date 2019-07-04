/*
This code handles the site's home page.
*/

// Imports.
const express = require("express");

// Local imports.
const Finaliser = require("../lib/finaliser.js");

// Constants.
const router = express.Router();
const finaliser = new Finaliser();

// Return the home page.
router.get("/", function(req, res, next){
  finaliser.protoRender(req, res, "index", { title: "Welcome" });
});

// Exports.
module.exports = router;
