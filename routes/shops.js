var express = require("express");
var router = express.Router();
var Shop = require("../schemas/shop");

/**
 * Route that return all the shops presents in the database
 */
router.get("/", function(req, res, next) {
  res.json({ coucou: "shops" });
});

/**
 * Route that allow the user to add a new shop in the database
 * Data expected in the body :
 * {
 *  name: Name of the shop,
 *  lat: latitude of the shop,
 *  long: longitude of the shop,
 *  type: Type of the shop ()}
 */
router.post("/add", function(req, res, next) {
  const { name, lat, long, type } = req.body;
  const newShop = new Shop({ name, position: { lat, long }, type });
  newShop.save(errors => {
    if (errors) {
      res.json({ errors });
    } else {
      res.json({ newShop: "success.shop.add" });
    }
  }); 
});

/**
 * Route that return a shop from an id given
 * Data expected in the body :
 * {
 *  idShop: Id of the shop
 * }
 */
router.get("/get", function(req, res, next) {
  const { idShop } = req.body;
  Shop.findById(idShop, (err, result) => {
    if (err) {
      res.json({ err });
    } else {
      res.json({ result });
    }
  });
});

/**
 * Route that return the name of a shop from an id given
 * Data expected in the body :
 * {
 *  idShop: Id of the shop
 * }
 */
router.get("/get/name", function(req, res, next) {
  const { idShop } = req.body;
  Shop.findById(idShop, (err, result) => {
    if (err) {
      res.json({ err });
    } else {
      res.json({ result: result.name });
    }
  });
});

module.exports = router;
