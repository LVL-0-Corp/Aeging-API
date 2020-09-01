var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const CERTIFICATION = new Schema({
  title: String,
  describeCertif: String,
  urlCertif: String,
  imageCertif: String
});

CERTIFICATION.methods.getTitle = () => {
  return this.title;
};

const Certification = mongoose.model("certification", CERTIFICATION);

module.exports = Certification;