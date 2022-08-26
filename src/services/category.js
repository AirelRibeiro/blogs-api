const { Category } = require('../database/models');

const categoryService = {
  create: async (categoryName) => {
    const category = await Category.create({ name: categoryName });
    return category;
  },

  findAll: async () => {
    const categories = await Category.findAll();
    return categories;
  },

  findByPk: async (id) => {
    const category = await Category.findByPk(id);
    if (!category) return null;
    return category.id;
  },
};

module.exports = categoryService;
