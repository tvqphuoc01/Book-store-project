const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const signUpController = require('../controllers/signUp.controller');

router.get('/', signUpController.userSignUp);

router.post('/', signUpController.createNewUser);

module.exports = router;
