var express = require("express");
var router = express.Router();
var Product = require("../../../../schemas/product");
var {  getProductById, getAllProduct } = require("../../../../middleware/productMW")

/**
 * Route that return all the shops presents in the database
 */
router.get("/", async function(req, res, next) {
  try{
    const tabProduct = await getAllProduct();
    res.json(tabProduct);
  } catch(err){
    res.json(err);
  }
});

router.get("/get/:idProduct", async function(req, res, next) {
  const idProduct = req.params.idProduct;
  try{
    const result = await getProductById(idProduct);
    res.json({result});
  } catch(err){
    res.json(err); 
  }
});

module.exports = router;