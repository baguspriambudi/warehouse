const express = require('express');
const passport = require('passport');

const userController = require('../controller/user');
const schema = require('../middleware/schema');

const router = express.Router();
router.post('/create', schema.midUser, userController.createUser);
router.get('/find', userController.findUser);
router.post('/login', userController.login);
router.post('/google', passport.authenticate('googleToken', { session: false }));

module.exports = router;
