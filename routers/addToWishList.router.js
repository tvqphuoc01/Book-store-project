const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const addToWishList = require('../controllers/addToWishList.controller');

router.post('/', addToWishList.wishListPost);

module.exports = router;
