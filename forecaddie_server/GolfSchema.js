
module.exports = function(mongoose) {

	var ShotSchema = mongoose.Schema ({
		score: Number,
		fairway: String,
		green: Boolean,
		putt: Number,
	});

	var HoleSchema = mongoose.Schema ({
		par: Number,
		shots: [ShotSchema]
	});

	var GameSchema = new mongoose.Schema ({
		holes: [HoleSchema]
	});

	var GameModel = mongoose.model('Game', GameSchema);
	return GameModel;
	
};