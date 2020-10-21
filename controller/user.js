const User = require('../models/User');

exports.createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    // const id = 1;
    const findUser = await User.findOne({ where: { username: username } });
    if (findUser) {
      return res.status(401).json({
        msg: 'username is already use',
      });
    }
    const user = await User.create({ username: username, password: password });
    res.status(200).json({
      msg: 'success',
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
