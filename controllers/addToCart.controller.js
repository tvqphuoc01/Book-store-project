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
    let checkBook = 0;
    for (let i = 0; i < cartData.cart.length; i++) {
      if (req.body.productId === cartData.cart[i].bookId) {
        // eslint-disable-next-line max-len
        cartData.cart[i].Qty = parseInt(cartData.cart[i].Qty) + parseInt(req.body.Qty);
        checkBook = 1;
      }
    }
    if (checkBook === 0) {
      const newBook = {
        bookId: req.body.productId,
        Qty: req.body.Qty,
      };
      cartData.cart.push(newBook);
    }
    cartData.save();
  }
};
module.exports ={
  addToCartPost,
};
