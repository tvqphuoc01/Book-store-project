const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const indexController = require('../controllers/index.controller');

router.get('/', indexController.indexGet);

module.exports = router;
