const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const bookTypeController = require('../controllers/book-type.controller');

router.get('/', bookTypeController.bookTypeGet);

router.post('/', bookTypeController.bookTypePost);

module.exports = router;
