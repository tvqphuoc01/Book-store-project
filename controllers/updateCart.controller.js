const cartModels = require('../models/cart.models');
const updateCart = async function(req, res) {
  // Check User Cookie
  // If userCookie === true => load User Info
  // Else Load -> raw Index page
  if (req.signedCookies.userId !== false) {
    /** Check itemId user want to Delete
     *  Delete user by $pull in MmongoDB
     *  Delete before await UserData
    */
    const cartData = await cartModels.findOne(
        {userId: req.signedCookies.userId},
        {userId: 1, _id: 1, cart: 1},
    );
    for (let i = 0; i < cartData.cart.length; i++) {
      if (cartData.cart[i].bookId === req.body.productId) {
        cartData.cart[i].Qty = req.body.Qty;
      }
    }
    cartData.save();
    res.end();
  } else {
    res.render('404');
  }
};

module.exports ={
  updateCart,
};
