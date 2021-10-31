module.exports.authMiddleware = async function(req, res, next) {
  if (!req.signedCookies.userId) {
    res.redirect('/logIn');
    return;
  }
  next();
};
