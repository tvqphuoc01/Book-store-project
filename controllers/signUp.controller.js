const userModel = require('../models/users.model');
const md5 = require('md5');
// Fucntion render Sign Up Page
const userSignUp = function(req, res) {
  res.render('signUp');
};

const createNewUser = async function(req, res) {
  // eslint-disable-next-line new-cap
  const newUser = new userModel({
    email: req.body.email,
    username: req.body.username,
    password: md5(req.body.password),
    address: req.body.address,
    phone: req.body.phone,
  });
  newUser.save();
  res.redirect('/');
};

module.exports = {
  userSignUp,
  createNewUser,
};
