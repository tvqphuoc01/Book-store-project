const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const loginController = require('../controllers/login.controller');

const loginValidate = require('../validate/login.validate');

router.get('/', loginController.userLogin);

router.post('/', loginValidate.loginValidate, loginController.loginPost);

module.exports = router;
