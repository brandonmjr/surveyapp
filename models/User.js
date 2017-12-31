const mongoose = require('mongoose');
const Schema = mongoose.Schema; //const {Shema} = mongoose

const userSchema = new Schema({
	googleId : String
});

mongoose.model('users', userSchema);