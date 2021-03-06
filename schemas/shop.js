var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const SHOP = new Schema({
  name: String,
  position: { lat: mongoose.Decimal128, long: mongoose.Decimal128 },
  type: Number,
  shortDescription: String,
  longDescription: String,
  imageUrl: String,
  imagesUrl: [String],
  address: String
});

SHOP.methods.getName = () => {
  return this.name;
};

const Shop = mongoose.model("shop", SHOP);

module.exports = Shop;