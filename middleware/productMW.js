var Product = require("../schemas/product");

async function getAllProduct() {
    try{
        const result = await Product.find({}).exec();
        return result;
    } catch(err){
        throw { error: 'product.getAll.error' }
    }
}

async function getProductById(productId) {
  try{
    const result = await Product.findById(productId);
    return result;
  } catch(err) {
    console.error(err);
    throw { error: 'product.findById.error' }
  }
}

module.exports = { getAllProduct, getProductById }