const loginService = require('../services/login');

const loginController = {
  userLogin: async (req, res, next) => {
    const token = await loginService.userLogin(req.body);
  
    if (token.message) return next(token);

    return res.status(200).json(token);
  },
};

module.exports = loginController;
