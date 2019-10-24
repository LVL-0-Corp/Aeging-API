var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const USER = new Schema({
  firstName: String,
  lastName: String,
  mail: String,
  status: Number
});

const User = mongoose.model("user", USER);

module.exports = User;
