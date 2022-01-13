const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const updateCartController = require('../controllers/updateCart.controller');

router.post('/', updateCartController.updateCart);

module.exports = router;
