var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const PRODUCT = new Schema({
  name: String,
  price: Number,
  type: Number
});

PRODUCT.methods.getName = () => {
  return this.name;
};

const Product = mongoose.model("product", PRODUCT);

module.exports = Product;