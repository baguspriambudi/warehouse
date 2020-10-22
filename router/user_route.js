const express = require('express');

const userController = require('../controller/user');
const schema = require('../middleware/schema');

const router = express.Router();
router.post('/create', schema.midUser, userController.createUser);
router.get('/find', userController.findUser);

module.exports = router;
