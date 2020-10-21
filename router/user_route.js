const express = require('express');

const router = express.Router();

const userController = require('../controller/user');

router.post('/create', userController.createUser);

module.exports = router;
