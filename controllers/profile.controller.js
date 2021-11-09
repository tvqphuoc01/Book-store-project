const userModels = require('../models/users.model');
const bookModels = require('../models/books.model');
const profileGet = async function(req, res) {
  // Check User Cookie
  // If userCookie === true => load User Info
  // Else Load -> raw Index page
  if (req.signedCookies.userId !== false) {
    const userData = await userModels.findOne(
        {_id: req.signedCookies.userId},
    );
    const wishList = [];
    for (let i = 0; i < userData.wishList.length; i++) {
      wishList.push(await bookModels.findOne(
          {_id: userData.wishList[i]},
      ));
    }
    res.locals.wishList = wishList;
    res.locals.user = userData;
    res.render('profile');
  } else {
    res.render('profile');
  }
};

module.exports ={
  profileGet,
};
