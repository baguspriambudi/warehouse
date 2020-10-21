const User = require('../models/User');
const { httpOkResponse, httpAuthenticationFailed } = require('../helper/http_respone');

exports.createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const findUser = await User.findOne({ where: { username: username } });
    if (findUser) {
      return httpAuthenticationFailed(res, 'username already use');
    }
    const user = await User.create({ username: username, password: password });
    httpOkResponse(res, 'success created user', user);
  } catch (error) {
    next(error);
  }
};
