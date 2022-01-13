const userModels = require('../models/users.model');

module.exports.signUpValidate = async function(req, res, next) {
  const errors = [];
  // get all usernam and email from Database
  // eslint-disable-next-line max-len
  const usernameData = await userModels.find({}, {username: 1, _id: 0, email: 1});

  // Check password and Confirm password
  if (req.body.password !== req.body.Repassword) {
    errors.push('Password must be same !');
  }

  // Check email has been used
  for (let i = 0; i < usernameData.length; i++) {
    if (usernameData[i].email === req.body.email) {
      errors.push('Email already exists !');
      break;
    }
  }

  // Check Username is Exist
  for (let i = 0; i < usernameData.length; i++) {
    if (usernameData[i].username === req.body.username) {
      errors.push('Username already exists !');
      break;
    }
  }

  // Check password length
  if (req.body.password.length < 8) {
    errors.push('Password must have at least 8 characters !');
  }

  if (errors.length !== 0) {
    res.render('signUp', {
      errors: errors,
    });

    return;
  }

  next();
};
