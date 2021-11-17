const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const routerController = require('../controllers/orderForm.controller');

router.post('/', routerController.orderPost);

module.exports = router;
