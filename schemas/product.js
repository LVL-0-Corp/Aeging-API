var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const PRODUCT = new Schema({
  productName: String,
  productImage: String,
  productPrice: Number, 
  productPriceType: Boolean,
  productType: String,
  productDesc: String
});

PRODUCT.methods.getName = () => {
  return this.productName;
};

const Product = mongoose.model("product", PRODUCT);

module.exports = Product;