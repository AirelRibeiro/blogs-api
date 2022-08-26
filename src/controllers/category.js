const categoryService = require('../services/category');

const categoryController = {
  create: async (req, res, next) => {
    try {
      const category = await categoryService.create(req.body.name);
      return res.status(201).json(category);
    } catch (err) {
      return next(err);
    }
  },

  findAll: async (_req, res, next) => {
    try {
      const categories = await categoryService.findAll();
      return res.status(200).json(categories);
    } catch (err) {
      return next(err);
    }
  },
};

module.exports = categoryController;
