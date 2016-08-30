
module.exports = function(mongoose) {

	var HoleSchema = mongoose.Schema ({
		par: Number,
		score: Number,
		fairway: String,
		green: Boolean,
		putt: Number
	});

	var GameSchema = new mongoose.Schema ({
		holes: [HoleSchema]
	});

	var GameModel = mongoose.model('Game', GameSchema);
	return GameModel;
	
};