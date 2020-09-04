var express = require("express");

var app = express();
app.use("/shops", require("./shops/shops"));
app.use("/products", require("./products/products"));
app.use("/news", require("./news/news"));
app.use("/certifications", require("./certifications/certifications"));
module.exports = app;
