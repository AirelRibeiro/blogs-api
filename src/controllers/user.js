const userService = require('../services/user');

const userController = {
  create: async (req, res, next) => {
    try {
      const token = await userService.create(req.body);
      return res.status(201).json(token);
    } catch (err) {
      return next(err);
    }
  },

  findAll: async (_req, res, next) => {
    try {
      const users = await userService.findAll();
      return res.status(200).json(users);
    } catch (err) {
      return next(err);
    }
  },
};

module.exports = userController;
