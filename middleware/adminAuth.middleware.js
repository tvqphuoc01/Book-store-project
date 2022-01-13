module.exports.authMiddleware = async function(req, res, next) {
  if (!req.signedCookies.adminId) {
    res.redirect('/admin');
    return;
  }
  next();
};
