const express = require('express');
const passport = require('passport');

const userController = require('../controller/user');
const schema = require('../middleware/schema');

const router = express.Router();
router.post('/create', schema.midUser, userController.createUser);
router.get('/find', userController.findUser);
router.post('/login', userController.login);
router.get('/google', passport.authenticate('google', { scope: 'profile' }));
router.get('/google/redirect', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  res.redirect('/');
  //   res.end('Logged');
});

module.exports = router;
