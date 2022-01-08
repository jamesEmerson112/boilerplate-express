const { response } = require('express');
var express = require('express');
var bodyParser = require('body-parser')

var app = express();

// console.log("Hello World")

// app.get("/", function(req, res) {
//     res.send('Hello Express');
//   });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extend: false }));

absolutelyPath = __dirname + "/views/index.html";
app.use(function middlewareLogger(req, res, next){
    var log = req.method + " " + req.path + " - " + req.ip;
    console.log(log);
    next();
})

app.get('/now', function middlewareNow(req, res, next){
    var time = new Date().toString();
    req.time = time;
    console.log(req.time);
    next();
    }, function(req, res) 
    {
        res.json({time: req.time});    
    }
)
// Normal usage
// app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));
app.get("/", function(req, res) {
        res.sendFile(absolutelyPath);
      });
      

app.get("/json", function(req, res) {
    if(process.env.MESSAGE_STYLE === "uppercase")
        res.json({"message": "HELLO JSON"})
    else
        res.json({"message": "Hello json"})
})

app.get("/:word/echo", function(req,res){
    const word = req.params.word;
    res.json({echo: word});
})

// app.get("/:word/echo", (req, res) => {
//     const { word } = req.params;
//     res.json({
//       echo: word
//     });
//   });

app.get("/name", function(req, res, next){
    var firstName = req.query.first;
    var lastName = req.query.last;
    // var {first: firstName, last:lastName} = req.query;
    res.json({
        name: `${firstName} ${lastName}`
    });
    console.log(`${firstName} ${lastName}`)
});
























 module.exports = app;
