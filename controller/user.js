// const bcrypt = require('bcrypt');
// const JWT = require('jsonwebtoken');

// const JWTScret = 'hdfshusdhifuy844h4yh';
const User = require('../models/User');
const { httpOkResponse, httpAuthenticationFailed } = require('../helper/http_respone');

exports.createUser = async (req, res, next) => {
  try {
    const { email, name, providerId, socialId } = req.body;
    const findUser = await User.findOne({ where: { email: email } });
    if (findUser) {
      return httpAuthenticationFailed(res, 'username already use');
    }
    const user = await User.create({ email, name, providerId, socialId });
    httpOkResponse(res, 'success created user', user);
  } catch (error) {
    next(error);
  }
};

exports.findUser = async (req, res, next) => {
  try {
    const user = await User.findAll({ include: 'Provider' });
    httpOkResponse(res, 'success find users', user);
  } catch (error) {
    next(error);
  }
};
