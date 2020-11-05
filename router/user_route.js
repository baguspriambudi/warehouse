const express = require('express');
const passport = require('passport');

const userController = require('../controller/user');
// const schema = require('../middleware/schema');

const router = express.Router();
router.post('/create', userController.createUser);
router.get('/find', userController.findUser);
router.post('/login', userController.login);
router.get('/google', passport.authenticate('google', { scope: 'profile', session: false }));
router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  res.send('Logged');
});

module.exports = router;
