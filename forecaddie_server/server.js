var express = require("express");
var mongoose = require("mongoose");
var session = require("express-session");
var bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost");

var UserModel = require("./User")(mongoose);
var GameModel = require("./GolfSchema")(mongoose);

var app = express();

var PORT = process.env.port || 3000;

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
		password: req.body.password,
		email: req.body.email
	});

	newUser.save(function(err, data){
		if(err) {
			console.log(err);
		} else {
			req.session.user = data;
			res.send("success");
			console.log(data._id, "I have an ID");
		}
	}); 
});

//Login
app.post("/api/login", function(req, res) {
		UserModel.findOne({
			username: req.body.username,
			password: req.body.password
		}, function(err,data) {
				if(err) {
					console.log(err);
				  	return;
				} else {
					console.log(data._id, "I'm here");
						req.session.user = data;
						res.send("success");
				}
		});
}); 

//Logout
app.post('/api/logout', function(req, res){
		console.log ("Logging out");
		console.log('username = ' + req.session.user);
		req.session.user = undefined;
		res.send("success");
		console.log('username = ' + req.session.user);
});

//Create Game Id when navigating to scorecard page 
app.get('/scorecard/:gameId', function(req,res){
		res.sendFile(__dirname + "/public/scorecard.html");

});

//Create new game
app.post('/api/createGame', function(req, res) {
		var newGame = new GameModel({
			course: req.body.course,
			userOutNine: req.body.userOutNine,
			userInNine: req.body.userInNine,
			userOutFairways: req.body.userOutFairways,
			userInFairways: req.body.userInFairways,
			userOutGreens: req.body.userOutGreens,
			userInGreens: req.body.userInGreens,
			userOutPutts: req.body.userOutPutts,
			userInPutts: req.body.userInPutts,
			userId: req.session.user._id
		});

		newGame.save(function(err, data){
			if(err){
				console.log(err);
				res.send("500");
			}
			res.send(data._id);
		});
});

app.post('/api/score', function(req, res){
			console.log(req.body.gameId);
			console.log(req.body.userOutNine, "THIS IS AN ARRAY");
		GameModel.findOneAndUpdate({_id: req.body.gameId },
			{
				$set: {
					userOutNine: req.body.userOutNine,
					userInNine: req.body.userInNine,					
				}			
			},
			{
				new: true
			},
			 function(err,data) {
				if(err) {
					console.log(err);
				  	return;
				} else {
					console.log(data, "I'm here");
						res.send(data);
				}
		});
});

app.post('/api/fairways', function(req,res) {

		GameModel.findOneAndUpdate({_id: req.body.gameId },
			{
				$set: {
					userOutFairways: req.body.userOutFairways,
					userInFairways: req.body.userInFairways,					
				}			
			},
			{
				new: true
			},
			 function(err,data) {
				if(err) {
					console.log(err);
				  	return;
				} else {
					console.log(data, "I'm here");
						res.send(data);
				}
		});
});

app.post('/api/greens', function(req, res) {

		GameModel.findOneAndUpdate({_id: req.body.gameId },
			{
				$set: {
					userOutGreens: req.body.userOutGreens,
					userInGreens: req.body.userInGreens,					
				}			
			},
			{
				new: true
			},
			 function(err,data) {
				if(err) {
					console.log(err);
				  	return;
				} else {
					console.log(data, "I'm here");
						res.send(data);
				}
		}); 
});

app.post('/api/putts', function(req, res) {

		GameModel.findOneAndUpdate({_id: req.body.gameId },
			{
				$set: {
					userOutPutts: req.body.userOutPutts,
					userInPutts: req.body.userInPutts,					
				}			
			},
			{
				new: true
			},
			 function(err,data) {
				if(err) {
					console.log(err);
				  	return;
				} else {
					console.log(data, "I'm here");
						res.send(data);
				}
		}); 
});


app.get('/stats', function(req, res) {
	GameModel.find({userId : req.session.user._id}, function(err, data){
		res.send(JSON.stringify(data));
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

