const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const profileController = require('../controllers/profile.controller');

router.get('/', profileController.profileGet);

module.exports = router;
