var mongoose = require("mongoose");
var extendSchema = require("./schemaExtender");
var Schema = mongoose.Schema;

const USER = new Schema({
  firstName: String,
  lastName: String,
  mail: String,
  password: String,
  token: [String],
  status: Number
});

const PARTICULIER = extendSchema(USER,{
  Pseudo: String,
  Sexe: Number,
  Tel: Number,
  ImageUrl: String,
  Naissance: String
})

const Pro = extendSchema(USER,{
  Siret: String,
  Name: String,
  Secteur: Number
})

const LambdaUser = mongoose.model("lambdaUser",PARTICULIER,"user");
const User = mongoose.model("user", USER);

module.exports = User;