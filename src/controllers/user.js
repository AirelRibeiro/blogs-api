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
    try {
      const users = await userService.findAll();
      return res.status(200).json(users);
};

module.exports = userController;
