const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const dashboardController = require('../controllers/dashboard.controller');

router.get('/', dashboardController.dashboardGet);

module.exports = router;
