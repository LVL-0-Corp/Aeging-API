var express = require("express");
var router = express.Router();

/**
 * Route that return all the shops presents in the database
 */
router.get("/", function(req, res, next) {
  res.json({ coucou: "products" });
});

module.exports = router;