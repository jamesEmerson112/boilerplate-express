var express = require('express');
var app = express();

// console.log("Hello World")

// app.get("/", function(req, res) {
//     res.send('Hello Express');
//   });

absolutelyPath = __dirname + "views/index.html";

app.get("/", function(req, res) {
        res.sendFile(absolutelyPath);
      });































 module.exports = app;
