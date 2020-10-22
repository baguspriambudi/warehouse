const express = require('express');

const userController = require('../controller/user');
const schema = require('../middleware/schema');

const router = express.Router();
router.post('/create', schema.midUser, userController.createUser);

module.exports = router;
