const Joi = require('@hapi/joi');
const { httpValidasiDataErrorRespone } = require('../helper/http_respone');

exports.midUser = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    name: Joi.string().required(),
    providerId: Joi.number().required(),
    socialId: Joi.string().required(),
  }).options({ abortEarly: false });

  const { error } = schema.validate(req.body);
  if (error) {
    return httpValidasiDataErrorRespone(res, error.details);
  }
  next();
};

exports.midProvider = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  }).options({ abortEarly: false });

  const { error } = schema.validate(req.body);
  if (error) {
    return httpValidasiDataErrorRespone(res, error.details);
  }
  next();
};
