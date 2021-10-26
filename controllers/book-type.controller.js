const userModels = require('../models/users.model');
const bookModels = require('../models/books.model');

const bookTypeGet = async function(req, res) {
  // Get book Data
  const bookType = req.query.type.split('-').join(' ');
  const bookData = await bookModels.find(
      {
        bookType: bookType,
      },
  );

  // Pagination
  const page = parseInt(req.query.page) || 1;
  const productPerPage = 16;
  const begin = (page - 1) * productPerPage;
  const end = page * productPerPage;
  const bookArray = bookData.slice(begin, end);

  // Check User Cookie
  // If userCookie === true => load User Info
  // Else Load -> raw Index page
  if (req.signedCookies.userId !== false) {
    const userData = await userModels.findOne(
        {_id: req.signedCookies.userId},
    );
    res.locals.currentPage = parseInt(page);
    res.locals.bookType = req.query.type;
    res.locals.books = bookArray;
    res.locals.user = userData;
    res.render('book-type');
  } else {
    res.locals.currentPage = parseInt(page);
    res.locals.bookType = req.query.type;
    res.locals.books = bookArray;
    res.render('book-type');
  }
};

module.exports ={
  bookTypeGet,
};
