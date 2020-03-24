var express = require("express");
var router = express.Router();
var Shop = require("../schemas/shop");
var { getAllShops, getShopById, addShop } = require("../middleware/shopMW")

/**
 * Route that return all the shops presents in the database
 */
router.get("/", async function(req, res, next) {
  try{
    const tabShops = await getAllShops();
    res.json(tabShops);
  } catch(err){
    res.json(err);
  }
});

/**
 * Route that return all the shops bio presents in the database
 */
router.get("/bio", function(req, res, next) {
  res.json({ coucou: "shops only bio" });
});

/**
 * Route that return all the shops local presents in the database
 */
router.get("/local", function(req, res, next) {
  res.json({ coucou: "shops only local" });
});

/**
 * Route that allow the user to add a new shop in the database
 * Data expected in the body :
 * {
 *  name: Name of the shop,
 *  lat: latitude of the shop,
 *  long: longitude of the shop,
 *  type: Type of the shop () (0 -> Bio, 1 -> Local, 2 -> Bio & Local)
 * }
 */
router.post("/add", async function(req, res, next) {
  const { name, lat, long, type } = req.body;  
  try {
    const shopCreated = await addShop(name, lat, long, type);
    res.json(shopCreated);
  } catch(err) {
    res.json(err);
  }
  
  
});

/**
 * Route that return a shop from an id given
 * Data expected in the body :
 * {
 *  idShop: Id of the shop
 * }
 */
router.get("/get", async function(req, res, next) {
  const { idShop } = req.body;
  try{
    const result = await getShopById(idShop);
    res.json({result});
  } catch(err){
    res.json(err); 
  }
  // Shop.findById(idShop, (err, result) => {
  //   console.log('coucou2');
  //   if (err) {
  //     res.json({ err });
  //   } else {
  //     res.json({ result });
  //   }
  // });
});

/**
 * Route that return the name of a shop from an id given
 * Data expected in the body :
 * {
 *  idShop: Id of the shop
 * }
 */
router.get("/get/name", async function(req, res, next) {
  const { idShop } = req.body;
  try{
    const result = await getShopById(idShop);
    res.json({ result: result.name });
  } catch(err){
    res.json(err);
  }  
});

module.exports = router;