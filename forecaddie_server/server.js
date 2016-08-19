var express = require("express");
//var mongoose = require("mongoose");
var session = require("express-session");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.port || 8000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({
	secret: "BigCat",
	resave: false,
	saveUninitialized: false
}));

app.use(function(req, res, next) {
	console.log(req.url);
	next();
});

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.post("/api", function(req, res) {
	res.send("success");
});

app.use(express.static("public"));

app.listen(PORT, function() {
	console.log("FORE RIGHT on Port " + PORT);
});

