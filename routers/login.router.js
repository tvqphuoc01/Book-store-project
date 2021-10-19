const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const loginController = require('../controllers/login.controller');

router.get('/', loginController.userLogin);

module.exports = router;
