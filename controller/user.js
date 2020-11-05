const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');

const JWTScret = 'hdfshusdhifuy844h4yh';
const User = require('../models/User');
const { httpOkResponse, httpAuthenticationFailed, httpNotFound } = require('../helper/http_respone');

exports.createUser = async (req, res, next) => {
  try {
    const { id, socialId, email, name, avatar } = req.body;
    const findUser = await User.findOne({ where: { email: email } });
    if (findUser) {
      return httpAuthenticationFailed(res, 'username already use');
    }
    const user = await User.create({ id: id, socialId: socialId, email: email, name: name, avatar: avatar });
    httpOkResponse(res, 'success created user', user);
  } catch (error) {
    next(error);
  }
};

exports.findUser = async (req, res, next) => {
  try {
    const user = await User.findAll({});
    httpOkResponse(res, 'success find users', user);
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return httpNotFound(res, 'user not found');
    }
    const compare = bcrypt.compareSync(password, user.password);
    if (!compare) {
      return httpAuthenticationFailed(res, 'password not match');
    }
    const token = JWT.sign({ id: user.id, role: user.role }, JWTScret, { expiresIn: '24h' });
    httpOkResponse(res, 'succes login', token);
  } catch (error) {
    next(error);
  }
};
