var express = require("express");
var mongoose = require("mongoose");
var session = require("express-session");
var bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost");

var UserModel = require("./User")(mongoose);
var GameModel = require("./GolfSchema")(mongoose);

var app = express();

var PORT = process.env.port || 8000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({
	secret: "BigCat", //To add to gitignore, create in another file and export/require it here. 
	resave: false,
	saveUninitialized: false
}));

app.use(function(req, res, next) {
	console.log(req.url);
	next();
});

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/public/index.html");
});

app.post("/api", function(req, res) {
	res.send("success");
});

//User Login Routes/Page Navigation
app.post("/api/register", function(req, res) {

	var newUser = new UserModel({
		username: req.body.username,
		password: req.body.password
	});

	newUser.save(function(err){
		if(err) {
			res.send("Error registering");
			console.log(err);
		} else {
			res.send("success");
		}
	}); 
});

app.post("/api/login", function(req, res) {
		UserModel.findOne({
			username: req.body.username,
			password: req.body.password
		}, function(err,data) {
				if(err) {
					console.log(err);
				  	return;
				} else {
					console.log(data.username, "I'm here");
						req.session.user = data.username;
						res.send("success");
				}
		});
}); 

app.post('/api/logout', function(req, res){
		console.log ("Logging out");
		console.log('username = ' + req.session.user);
		req.session.user = undefined;
		res.send("success");
		console.log('username = ' + req.session.user);
});

app.get('/scorecard/:gameId', function(req,res){
		res.sendFile(__dirname + "/public/scorecard.html");

});

app.post('/api/createGame', function(req, res) {
		var newGame = new GameModel({
			course: req.body.course,
			score: req.body.score,
			fairways: req.body.fairways,
			greens: req.body.greens,
			putts: req.body.putts
		});

		newGame.save(function(err, data){
			res.send(data._id);
		});
});

app.post('/api/score', function(req, res){

		GameModel.findOne({
			arr1: req.body.userOutNine,
			arr2: req.body.userInNine,
			type: req.body.score,
			gameId: req.body.gameId			
		}, function(err,data) {
				if(err) {
					console.log(err);
				  	return;
				} else {
					console.log(data.GameModel, "I'm here");
						res.send("success");
				}
		});

		/* game.save(function(err, data){
			if(err) {
				res.send("Error saving game");
				console.log(err);
			} else {
				res.send("success");
			}
		}); */
});

app.post('/api/fairways', function(req,res) {

		GameModel.findOne({
			arr1: req.body.userOutFairways,
			arr2: req.body.userInFairways,
			type: req.body.fairways,
			gameId: req.body.gameId			
		});
});

app.post('/api/greens', function(req,res) {

		GameModel.findOne({
			arr1: req.body.userOutGreens,
			arr2: req.body.userInGreens,
			type: req.body.greens,
			gameId: req.body.gameId			
		});
});

app.post('/api/putts', function(req,res) {

		GameModel.findOne({
			arr1: req.body.userOutPutts,
			arr2: req.body.userInPutts,
			type: req.body.putts,
			gameId: req.body.gameId			
		});
});

app.use(express.static("public"));

app.use(function(req, res, next) {
	res.status(404);
	res.send("That's O.B.");
});

app.listen(PORT, function() {
	console.log("FORE RIGHT on Port " + PORT);
});

