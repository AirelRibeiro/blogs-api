const blogPostService = require('../services/blogPost');

const blogPostController = {
  findAll: async (req, res, next) => {
    try {
      const posts = await blogPostService.findAll();
      return res.status(200).json(posts);
    } catch (err) {
      return next(err);
    }
  },
  findOnePost: async (req, res, next) => {
  },
};

module.exports = blogPostController;
