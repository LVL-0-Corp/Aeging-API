var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const NEWS = new Schema({
  title: String,
  textNews: String,
  dateNews: String,
  autorNews: String,
  imageNews: String
});

const News = mongoose.model("news", NEWS);

module.exports = News;