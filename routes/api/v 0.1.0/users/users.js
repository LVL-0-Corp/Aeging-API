var express = require('express');
var router = express.Router();
var User = require("../../../../schemas/user");
var { getUserById, addUser, tokenUserCheck } = require("../../../../middleware/userMW");
var bcrypt = require("bcrypt");

var jwt = require('jsonwebtoken');

/**
 * Route that return all the users presents in the database
 */
router.post('/login', async function (req, res, next) {
  const {mail, password} = req.body;
  try {
    const user = await User.findOne({ mail: mail });
    if (!user) {
      return res.status(401).json({
        error: new Error('User not found!')
      });
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({
        error: new Error('Incorrect password!')
      });
    }
    const token = jwt.sign(
      { userId: user._id },
      'RANDOM_TOKEN_SECRET',
      { expiresIn: '24h' }
    );
    res.status(200).json({
      userId: user._id,
      token: token
    });
  }
  catch (error) {
    res.status(500).json({
      error: error
    });
  }
});

router.post('/loginToken', async function (req, res, next) {
  const {token} = req.body;
  try {
    const verif = jwt.verify(token,'RANDOM_TOKEN_SECRET');
    const user = await getUserById(verif.userId);
    res.status(200).json({ 
      firstName: user.firstName, 
      lastName: user.lastName, 
      mail: user.mail, 
      address: user.address, 
      CP: user.CP, 
      city: user.city, 
      date: user.date, 
      phone: user.phone
    });
  }
  catch (error) {
    res.status(500).json({
      error: error
    });
  }
});

/**
 * Route that add the user in the database
 * Data expected in the body :
 * {
 *  firstName: First Name of the user,
 *  lastName: Last Name of the user,
 *  mail: Email of the user, 
 *  status: Status of the user ()}
 */

router.post("/signup", async function (req, res, next) {
  const { firstName, lastName, date, address, city, CP, phone, mail, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({
    mail: mail,
    firstName,
    lastName,
    date,
    address,
    city,
    CP,
    phone,
    password: hashedPassword
  });
  try {
    console.log(user);
    await user.save();
    res.status(201).json({
      message: 'User added successfully!'
    });
  }
  catch (error) {
    res.status(500).json({
      error: error
    });
  }
});

router.get("/profile", tokenUserCheck, async function (req, res, next) {
  const { userId } = req;
  try{
    const result = await getUserById(userId);
    res.json({result});
  } catch(err){
    res.json(err); 
  }
})

module.exports = router;