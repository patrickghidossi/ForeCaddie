var mongoose = require(mongoose);

var ShotSchema = mongoose.Schema ({
	score: Number,
	fairway: String,
	putts: Number,
	gir: Boolean
});

var HoleSchema = mongoose.Schema ({
	par: Number,
	shots: [ShotSchema]
});

var GameSchema = new mongoose.Schema ({
	holes: [HoleSchema]
});

var GameModel = mongoose.model('Game', GameSchema);

module.exports = mongoose.model('Game', GameSchema);