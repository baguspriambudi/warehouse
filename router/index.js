const express = require('express');

const user = require('./user_route');
const provider = require('./provider_route');

const router = express.Router();
router.use('/user', user);
router.use('/provider', provider);

module.exports = router;
