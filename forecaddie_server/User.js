
module.exports = function(mongoose) {

var userSchema = new mongoose.Schema({

	username: {type: String, unique: true},
	password: String,
	email: String,
});

var UserModel = mongoose.model('User', userSchema);
return UserModel;

};