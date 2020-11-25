const express = require('express');

const providerController = require('../controller/provider');
const schema = require('../middleware/schema');

const router = express.Router();
router.post('/create', schema.midProvider, providerController.createProvider);

module.exports = router;
