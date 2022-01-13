const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const bookPageController = require('../controllers/book-page.controller');

router.get('/', bookPageController.bookPageGet);

module.exports = router;
