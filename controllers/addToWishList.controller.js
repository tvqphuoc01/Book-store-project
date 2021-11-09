const userModels = require('../models/users.model');

const wishListPost = async function(req, res) {
  const userData = await userModels.findOne(
      {_id: req.signedCookies.userId},
  );

  userData.wishList.push(req.body.productId);
  userData.save();
};

module.exports ={
  wishListPost,
};
