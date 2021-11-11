const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const cartController = require('../controllers/cart.controller');

router.get('/', cartController.cartGet);

module.exports = router;
