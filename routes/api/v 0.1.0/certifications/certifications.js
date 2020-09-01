var express = require("express");
var router = express.Router();
var Certification = require("../../../../schemas/certification");
var { getAllCertifications } = require("../../../../middleware/certificationMW")

router.get("/", async function(req, res, next) {
  try{
    const tabCertifications = await getAllCertifications();
    res.json(tabCertifications);
  } catch(err){
    res.json(err);
  }
});

module.exports = router;