var express = require("express");
var router = express.Router();
var News = require("../../../../schemas/news");
var { getAllNews } = require("../../../../middleware/newsMW")

router.get("/", async function(req, res, next) {
  try{
    const tabNews = await getAllNews();
    res.json(tabNews);
  } catch(err){
    res.json(err);
  }
});

module.exports = router;