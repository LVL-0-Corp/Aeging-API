var express = require("express");

var app = express();
app.use("/shops", require("./shops/shops"));
module.exports = app;
