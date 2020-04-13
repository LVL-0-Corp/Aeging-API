var express = require("express");
var path = require("path");
var cors = require("cors");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
const DB_CONFIG = require("./config/db");

var usersRouter = require("./routes/users/users");
var productsRouter = require("./routes/api/v 0.1.0/products/products");
var app = express();

mongoose.connect(DB_CONFIG.DB_URL, DB_CONFIG.DB_OPTIONS);
var db = mongoose.connection;

db.on("error", function() {
  console.error("Error, connexion to the database failed");
});
db.once("open", function() {
  console.log("Successfully connected to the database");
});


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
/*
var whitelist = ['http://localhost:8081/'];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
*/
app.use(cors());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use("/users", usersRouter);
app.use("/api", require("./routes/api/"));
app.use("/products", productsRouter);

module.exports = app;