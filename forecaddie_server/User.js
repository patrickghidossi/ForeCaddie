var mongoose = require(mongoose);

var userSchema = new mongoose.Schema({

	username: {type: String, unique: true},
	password: String,
	email: String

});

var UserModel = mongoose.model('User', userSchema);

module.exports = mongoose.model('User', userSchema);

