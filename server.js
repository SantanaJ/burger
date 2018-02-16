var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var expresshandle = require("express-handlebars");

app.engine("handlebars", expresshandle({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require ("./controllers/burgersController.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });