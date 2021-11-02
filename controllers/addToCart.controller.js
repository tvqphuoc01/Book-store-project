const cartModels = require('../models/cart.models');
const addToCartPost = async function(req, res) {
  const cartData = await cartModels.findOne(
      {userId: req.signedCookies.userId},
      {userId: 1, _id: 1, cart: 1},
  );
  if (cartData === null) {
    // eslint-disable-next-line new-cap
    const newCart = new cartModels({
      userId: req.signedCookies.userId,
      cart: [
        {
          bookId: req.body.productId,
          Qty: req.body.Qty,
        },
      ],
    });
    newCart.save();
  } else {
    const newBook = {
      bookId: req.body.productId,
      Qty: req.body.Qty,
    };
    // eslint-disable-next-line no-unused-vars
    cartData.cart.push(newBook);
    cartData.save();
  }
};
module.exports ={
  addToCartPost,
};
