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
	secret: "BigCat",
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
		var game = new GameModel({
			holes: [],
			course: req.body.course
		});

		game.save(function(err, data){
			res.send(data._id);
		});
});

app.post('api/scorecard', function(req, res){
	var hole = {
		_id: req.body.id,
		score: req.body.score,
		fairway: req.body.fairway,
		green: req.body.green,
		putt: Number
	}
	//do if type === "score" etc then arr1 == my arrays 
		GameModel.findOneAndUpdate(
    		{ _id: gameId, "holes._id": hole._id },
    		{ 
		        "$set": {
		            "holes.$": hole
		   		 } 
    		},
	    	function(err,data) {
	    		console.log(hole);
	    	}
		);

		game.save(function(err){
			if(err) {
				res.send("Error saving game");
				console.log(err);
			} else {
				res.send("success");
			}
		});
});

	/* GameModel.findOne(
		{_id: req.body.gameId},
		function(err, game) {
			for(var i = 0; i < game.holes.length; i++) {

			}
		});

		game.save(function (err) {
        if(err) {
            console.log("error");
        }
    });*/


app.use(express.static("public"));

app.use(function(req, res, next) {
	res.status(404);
	res.send("That's O.B.");
});

app.listen(PORT, function() {
	console.log("FORE RIGHT on Port " + PORT);
});

