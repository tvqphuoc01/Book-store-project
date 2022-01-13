const userModels = require('../models/users.model');
const bookModels = require('../models/books.model');
const bookPageGet = async function(req, res) {
  const bookData = await bookModels.findOne(
      {_id: req.query.id},
  );
  // Check User Cookie
  // If userCookie === true => load User Info
  // Else Load -> raw Index page
  if (req.signedCookies.userId !== false) {
    const userData = await userModels.findOne(
        {_id: req.signedCookies.userId},
    );
    res.locals.book = bookData;
    res.locals.user = userData;
    res.render('book-page');
  } else {
    res.locals.book = bookData;
    res.render('book-page');
  }
};

module.exports ={
  bookPageGet,
};
