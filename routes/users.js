var express = require('express');
var router = express.Router();
var User = require("../schemas/user");

/**
 * Route that return all the users presents in the database
 */
router.get('/', function(req, res, next) {
  res.json({ coucou: "shops" });
});


/**
 * Route that add the user in the database
 * Data expected in the body :
 * {
 *  firstName: First Name of the user,
 *  lastName: Last Name of the user,
 *  mail: Email of the user,
 *  status: Status of the user ()}
 */
router.post("/add", function(req, res, next) {
  const { firstName, lastName, mail, status } = req.body;
  const newUser = new User({ firstName, lastName, mail, status });
  newUser.save(errors => {
    if (errors) {
      res.json({ errors });
    } else {
      res.json({ newUser: "success.user.add" });
    }
  });
});

module.exports = router;