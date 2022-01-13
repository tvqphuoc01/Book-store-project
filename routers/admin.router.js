const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const adminController = require('../controllers/admin.controller');

const adminValidate = require('../validate/admin.validate');

router.get('/', adminController.adminLogin);

router.post('/', adminValidate.loginValidate, adminController.adminPost);

module.exports = router;
