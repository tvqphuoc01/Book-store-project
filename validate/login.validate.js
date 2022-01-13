const userModels = require('../models/users.model');
const md5 = require('md5');

module.exports.loginValidate = async function(req, res, next) {
  // eslint-disable-next-line prefer-const
  let errors = [];
  const userData = await userModels.findOne(
      {username: req.body.username},
      {username: 1, _id: 1, password: 1},
  );

  if (userData === null) {
    errors.push('user does not exist !!!');
  } else if (md5(req.body.password) !== userData.password) {
    errors.push('Wrong password !!!');
  }

  if (errors.length !== 0) {
    res.render('logIn', {
      errors: errors,
    });

    return;
  } else {
    if (req.body.remember === 'on') {
      // If User check on Remember me set Expires day for Cookie
      res.cookie(
          'userId', // Cookie Name
          userData._id.valueOf(), // Cookie Values
          // Cookie Expires day
          {
            expires: new Date(Date.now() + 900000000), // 10 Days
            httpOnly: true,
            signed: true,
          },
      );
      next();
    } else {
      // Delete Cookie when User close Browsers
      res.cookie('userId', userData._id.valueOf(), {signed: true});
      next();
    }
  }
  next();
};
