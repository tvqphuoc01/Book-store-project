const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const addToCartPost = require('../controllers/addToCart.controller');

router.post('/', addToCartPost.addToCartPost);

module.exports = router;
