var express = require('express');
var app = express();

// console.log("Hello World")

// app.get("/", function(req, res) {
//     res.send('Hello Express');
//   });

absolutelyPath = __dirname + "/views/index.html";

// Normal usage
// app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));
// app.get("/", function(req, res) {
//         res.sendFile(absolutelyPath);
//       });

app.get("/json", function(req, res) {
    if(process.env.MESSAGE_STYLE === "uppercase")
        res.json({"message": "HELLO JSON"})
    else
        res.json({"message": "Hello json"})
})





























 module.exports = app;
