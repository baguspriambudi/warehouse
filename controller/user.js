const bcrypt = require('bcrypt');

const User = require('../models/User');
const { httpOkResponse, httpAuthenticationFailed } = require('../helper/http_respone');

exports.createUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ where: { email: email } });
    if (findUser) {
      return httpAuthenticationFailed(res, 'username already use');
    }
    const hashPassword = bcrypt.hashSync(password, 10);
    const user = await User.create({ email: email, password: hashPassword });
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
