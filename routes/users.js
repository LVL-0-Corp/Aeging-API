var express = require('express');
var router = express.Router();
var User = require("../schemas/user");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

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