const express = require('express');

const providerController = require('../controller/provider');

const router = express.Router();
router.post('/create', providerController.createProvider);

module.exports = router;
