const Provider = require('../models/provider');
const { httpOkResponse, httpAuthenticationFailed } = require('../helper/http_respone');

exports.createProvider = async (req, res, next) => {
  try {
    const { name } = req.body;
    const findProvider = await Provider.findOne({ where: { name: name } });
    if (findProvider) {
      return httpAuthenticationFailed(res, 'provider is exist');
    }
    const providerCreate = await Provider.create({ name });
    httpOkResponse(res, 'successfuly created provider', providerCreate);
  } catch (error) {
    next(error);
  }
};
