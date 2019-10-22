var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const SHOP = new Schema({
    name: String,
    position: {x: Number, y: Number},
    type: Number
});

SHOP.methods.getName = ()=>{return this.name;};

const Shop = mongoose.model('shop', SHOP);

module.exports = Shop;