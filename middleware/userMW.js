var User = require("../schemas/user");
var jwt = require('jsonwebtoken');

async function tokenUserCheck(req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      req.userId = userId;
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};

async function getUserById(userId) {
  try {
    const result = await User.findById(userId);
    return result;
  } catch (err) {
    console.error(err);
    throw { error: 'user.findById.error' }
  }
}

async function addUser(name, lat, long, type, shortDescription, longDescription, imageUrl, imagesUrl, address) {
  try {
    const newUser = new User({ name, position: { lat, long }, type, shortDescription, longDescription, imageUrl, imagesUrl, address });
    await newUser.save();
    return ({ newUser: "success.shop.add" });
  } catch (err) {
    console.error(err);
    throw { error: 'user.add.error' }
  }
}

module.exports = { getUserById, addUser, tokenUserCheck }