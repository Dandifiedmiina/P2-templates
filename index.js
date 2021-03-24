var http = require("http");
var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.locals.pretty = true;

var list = require("./task.json");
var json = require("./example.json");

app.get("/", function (req, res) {
  console.log(list);
  console.log(json);

  res.render("pages/index", list);
});

app.get("/users", function (req, res) {
  console.log(list);

  res.render("pages/users", json);
});

app.get("/api", function (req, res) {
  res.render("pages/index");
});

app.get("*", function (req, res) {
  res.send("Cant find the requested page", 404);
});

// Web-palvelimen luonti
app.listen(process.env.PORT || 5000, function () {
  console.log("Example app listening on port 5000!");
});

function results(err, data) {
  if (err) return console.error(err);
  console.log("log");
}
