const express = require('express');
const passport = require('passport');
// eslint-disable-next-line new-cap
const router = express.Router();

const signUpController = require('../controllers/signUp.controller');

const signUpValidate = require('../validate/signUp.validate');

router.get('/google', passport.authenticate('google', {scope: ['profile']}));

router.get(
    '/google/callback',
    passport.authenticate('google', {failureRedirect: '/'}),
    (req, res) => {
      // Set Cookie for Account Log in from Google
      res.cookie('userId', req.user._id.valueOf(), {signed: true});
      res.redirect('/');
    },
);

// Chinh lai Router cua Log Out Google khi lam Log Out
// @desc    Logout user
// @route   /auth/logout
router.get('/google/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});


router.get('/', signUpController.userSignUp);

router.post('/', signUpValidate.signUpValidate, signUpController.createNewUser);

module.exports = router;
