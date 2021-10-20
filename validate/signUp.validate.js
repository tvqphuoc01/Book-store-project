const userModels = require('../models/users.model');

module.exports.signUpValidate = async function(req, res, next) {
  const errors = [];
  const usernameData = await userModels.find({}, {username: 1, _id: 0});

  // Check password and Confirm password
  if (req.body.password !== req.body.Repassword) {
    errors.push('Password must be sanme !');
  }

  // Check Username is Exist
  for (let i = 0; i < usernameData.length; i++) {
    if (usernameData[i].username === req.body.username) {
      errors.push('Username already exists');
      break;
    }
  }

  if (errors.length !== 0) {
    res.render('signUp', {
      errors: errors,
    });

    return;
  }

  next();
};
