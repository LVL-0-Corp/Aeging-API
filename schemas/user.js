var mongoose = require("mongoose");
var extendSchema = require("./schemaExtender");
var Schema = mongoose.Schema;

const USER = new Schema({
  date: Date, 
  address: String, 
  city: String, 
  CP: String, 
  phone: String,
  firstName: String,
  lastName: String,
  mail: {type: String, required:true, unique:true},
  password: {type: String, required: true},
  token: [String]
});

const Pro = extendSchema(USER,{
  Siret: String,
  Name: String,
  Secteur: Number
})

const User = mongoose.model("user", USER);

module.exports = User;