const mongoose = require('mongoose');

const cart = new mongoose.Schema({
  userId: String,
  cart: [
    {
      bookId: String,
      Qty: String,
    },
  ],
});

module.exports = mongoose.model('cart', cart);
