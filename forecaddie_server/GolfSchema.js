
module.exports = function(mongoose) {

	var GameSchema = new mongoose.Schema ({
		course: String,
		userOutNine: String,
		userInNine: String,
		userOutFairways: String,
		userInFairways: String,
		userOutGreens: String,
		userInGreens: String,
		userOutPutts: String,
		userInPutts: String,
		userId: String
	});

	var GameModel = mongoose.model('Game', GameSchema);
	return GameModel;
	
};