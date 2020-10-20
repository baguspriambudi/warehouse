const User = require('../models/User');

exports.createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    // eslint-disable-next-line new-cap
    const user = await new User.create({ username: username, psswd: password });
    res.status(200).json({
      msg: 'success',
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
