/* eslint-disable max-len */
const userModels = require('../models/users.model');
const bookModels = require('../models/books.model');
const cartModels = require('../models/cart.models');
const cartGet = async function(req, res) {
  // Load User Info
  const userData = await userModels.findOne(
      {_id: req.signedCookies.userId},
  );

  if (req.query.itemId) {
    await cartModels.findOneAndUpdate({'userId': req.signedCookies.userId}, {$pull: {cart: {bookId: req.query.itemId}}});
  }

  const cartData = await cartModels.findOne(
      {userId: req.signedCookies.userId},
  );
  if (cartData === null) {
    res.locals.cartLength = 0;
    res.locals.bookData = [];
  } else {
    const bookIdList = [];
    const bookData = [];
    for (let i = 0; i < cartData.cart.length; i++) {
      bookIdList.push(cartData.cart[i].bookId);
    }
    for (let i = 0; i < bookIdList.length; i++) {
      const book = await bookModels.findOne(
          {_id: bookIdList[i]},
      );
      bookData.push(book);
    }
    res.locals.cartData = cartData;
    res.locals.cartLength = bookIdList.length;
    res.locals.bookData = bookData;
  }
  res.locals.user = userData;
  res.render('cart');
};

module.exports ={
  cartGet,
};
