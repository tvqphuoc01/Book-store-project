const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
  bookname: String,
  author: String,
  publisher: String,
  authorBirthDay: String,
  country: String,
  language: String,
  bookImage: [],
  price: String,
  sellPrice: String,
  bookType: String,
});

module.exports = mongoose.model('book', userModel);
