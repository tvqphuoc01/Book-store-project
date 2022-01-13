// Function render Login Page
const userLogin = function(req, res) {
  res.render('logIn');
};


const loginPost = function(req, res) {
  res.redirect('/');
};

module.exports ={
  userLogin,
  loginPost,
};
