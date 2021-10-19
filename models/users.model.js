const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  address: String,
  phone: String,
});

module.exports = mongoose.model('user', userModel);
