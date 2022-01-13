/* eslint-disable no-unused-vars */
const userModels = require('../models/users.model');
const fetch = require('node-fetch');
const indexGet = async function(req, res) {
  // counting Page view with HIT
  const response = await fetch('https://api.countapi.xyz/hit/bookStore');

  // Check User Cookie
  // If userCookie === true => load User Info
  // Else Load -> raw Index page
  if (req.signedCookies.userId !== false) {
    const userData = await userModels.findOne(
        {_id: req.signedCookies.userId},
    );
    res.locals.user = userData;
    res.render('index');
  } else {
    res.render('index');
  }
};

module.exports ={
  indexGet,
};
