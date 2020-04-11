var Shop = require("../schemas/shop");

async function getAllShops() {
    try{
        const result = await Shop.find({}).exec();
        return result;
    } catch(err){
        throw { error: 'shop.getAll.error' }
    }
}

async function getShopById(shopId) {
  try{
    const result = await Shop.findById(shopId);
    return result;
  } catch(err) {
    console.error(err);
    throw { error: 'shop.findById.error' }
  }
}

async function addShop(name, lat, long, type, shortDescription, imageUrl){    
    try{
        const newShop = new Shop({ name, position: { lat, long }, type, shortDescription, imageUrl});
        await newShop.save();        
        return ({ newShop: "success.shop.add" });
    } catch(err){
        console.error(err);
        throw { error: 'shop.add.error' }
    }
}

module.exports = { getAllShops, getShopById, addShop }