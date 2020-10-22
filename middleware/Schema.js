const Joi = require('@hapi/joi');
const { httpValidasiDataErrorRespone } = require('../helper/http_respone');

exports.midUser = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
    method: Joi.string().valid('google', 'facebook'),
  }).options({ abortEarly: false });

  const { error } = schema.validate(req.body);
  if (error) {
    return httpValidasiDataErrorRespone(res, error.details);
  }
  next();
};
