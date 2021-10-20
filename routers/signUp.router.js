const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const signUpController = require('../controllers/signUp.controller');

const signUpValidate = require('../validate/signUp.validate');

router.get('/', signUpController.userSignUp);

router.post('/', signUpValidate.signUpValidate, signUpController.createNewUser);

module.exports = router;
