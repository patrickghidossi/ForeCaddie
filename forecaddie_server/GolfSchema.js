
module.exports = function(mongoose) {

	var GameSchema = new mongoose.Schema ({
		course: String,
		score: Number,
		fairways: String,
		greens: Boolean,
		putts: Number
	});

	var GameModel = mongoose.model('Game', GameSchema);
	return GameModel;
	
};