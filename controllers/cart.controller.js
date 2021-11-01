const userModels = require('../models/users.model');
const bookModels = require('../models/books.model');
const cartGet = async function(req, res) {
  const bookData = await bookModels.findOne(
      {_id: req.query.id},
  );

  // Load User Info
  const userData = await userModels.findOne(
      {_id: req.signedCookies.userId},
  );
  res.locals.book = bookData;
  res.locals.user = userData;
  res.render('cart');
};

module.exports ={
  cartGet,
};
