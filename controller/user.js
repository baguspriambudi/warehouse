const models = require('../models/user');

exports.createUser = async (req, res, next) => {
  try {
    const user = await models.User.findAll({});
    res.status(200).json({
      msg: 'success',
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
