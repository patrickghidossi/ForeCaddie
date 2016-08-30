
module.exports = function(mongoose) {

	var GameSchema = new mongoose.Schema ({
		course: String,
		score: Number,
		fairway: String,
		green: Boolean,
		putt: Number
	});

	var GameModel = mongoose.model('Game', GameSchema);
	return GameModel;
	
};