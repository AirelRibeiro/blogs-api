const blogPostService = require('../services/blogPost');

const blogPostController = {
  findAll: async (req, res, next) => {
    try {
      const posts = await blogPostService.findAll();
      return res.status(200).json(posts);
    } catch (err) {
  },
};
module.exports = blogPostController;
