const { Category } = require('../database/models');

const categoryService = {
  create: async (categoryName) => {
    const category = await Category.create({ name: categoryName });
    return category;
  },
};

module.exports = categoryService;
