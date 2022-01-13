const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
  googleId: String,
  email: String,
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  address: String,
  phone: String,
  image: String,
  wishList: [],
});

module.exports = mongoose.model('user', userModel);
