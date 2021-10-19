const userModel = require('../models/users.model');

// Fucntion render Sign Up Page
const userSignUp = function(req, res) {
  res.render('signUp');
};

const createNewUser = function(req, res) {
  console.log(req.body);
  // eslint-disable-next-line new-cap
  const newUser = new userModel({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    address: req.body.address,
    phone: req.body.phone,
  });
  newUser.save();
  console.log(newUser);
  res.redirect('/');
};

module.exports = {
  userSignUp,
  createNewUser,
};
