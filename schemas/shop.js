var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const SHOP = new Schema({
  name: String,
  position: { lat: mongoose.Decimal128, long: mongoose.Decimal128 },
  type: Number
});

SHOP.methods.getName = () => {
  return this.name;
};

const Shop = mongoose.model("shop", SHOP);

module.exports = Shop;

//fefefef