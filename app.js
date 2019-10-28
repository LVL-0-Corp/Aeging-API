var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
const DB_CONFIG = require("./config/db");

var usersRouter = require("./routes/users");
var shopsRouter = require("./routes/shops");

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

app.use("/users", usersRouter);
app.use("/shops", shopsRouter);

module.exports = app;
