const mongoose = require('mongoose');

const adminModel = new mongoose.Schema({
  username: String,
  password: String,
});

module.exports = mongoose.model('admin', adminModel);
