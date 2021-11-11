const userModels = require('../models/users.model');
const bookModels = require('../models/books.model');
const dashboardGet = async function(req, res) {
  const userData = await userModels.find();
  const bookData = await bookModels.find();

  res.locals.userData = JSON.stringify(userData);
  res.locals.bookData = JSON.stringify(bookData);
  res.locals.NumberOfUsers = userData.length;
  res.locals.NumberOfBooks = bookData.length;
  res.render('dashboard');
};

module.exports ={
  dashboardGet,
};

