const userModels = require('../models/users.model');
const cartModels = require('../models/cart.models');
const orderPost = async function(req, res) {
  const cartData = await cartModels.findOne(
    {userId: req.signedCookies.userId},
    {userId: 1, _id: 1, cart: 1},
  );
  console.log(req.body);
  res.render('orderForm');
};

module.exports ={
  orderPost,
};
