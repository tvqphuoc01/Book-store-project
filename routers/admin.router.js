const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const adminController = require('../controllers/admin.controller');

router.get('/', adminController.adminLogin);

module.exports = router;
