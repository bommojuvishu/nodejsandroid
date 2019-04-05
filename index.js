const port = process.env.PORT || 3000;
var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("god says you have to go the shazam movie!");
});

app.listen(port);
