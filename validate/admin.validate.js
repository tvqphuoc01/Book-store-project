const adminModels = require('../models/admin.model');

module.exports.loginValidate = async function(req, res, next) {
  // eslint-disable-next-line prefer-const
  let errors = [];
  const userData = await adminModels.findOne(
      {username: req.body.username},
      {username: 1, _id: 1, password: 1},
  );

  console.log(req.body.password);
  console.log(userData.password);
  if (userData === null) {
    errors.push('user does not exist !!!');
  } else if (req.body.password !== userData.password) {
    errors.push('Wrong password !!!');
  }

  if (errors.length !== 0) {
    res.render('admin', {
      errors: errors,
    });

    return;
  } else {
    // Delete Cookie when User close Browsers
    res.cookie('userId', userData._id.valueOf(), {signed: true});
  }
  next();
};
