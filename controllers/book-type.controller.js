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

const bookTypePost = async function(req, res) {
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
  let bookArray = bookData.slice(begin, end);

  // Sort By
  if (req.body.option === 'option1') { // Sort by Name(A -> Z)
    bookArray = bookArray.sort((a, b) => {
      if (a.bookname > b.bookname) return 1;
      if (a.bookname < b.bookname) return -1;
      return 0;
    });
  } else if (req.body.option === 'option3') { // Sort by price(H -> L)
    bookArray = bookArray.sort((a, b) => {
      if (a.sellPrice > b.sellPrice) return 1;
      if (a.sellPrice < b.sellPrice) return -1;
      return 0;
    });
  } else if (req.body.option === 'option2') { // Sort by price(L -> H)
    bookArray = bookArray.sort((a, b) => {
      if (a.sellPrice < b.sellPrice) return 1;
      if (a.sellPrice > b.sellPrice) return -1;
      return 0;
    });
  }

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
  bookTypePost,
};
