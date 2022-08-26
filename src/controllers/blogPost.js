const blogPostService = require('../services/blogPost');

const blogPostController = {
  create: async (req, res, next) => {
    try {
      const { title, content, userId, categoryIds } = req.newPost;
      const post = await blogPostService.create({ title, content, userId }, categoryIds);
      return res.status(201).json(post); 
    } catch (err) {
  },

  findAll: async (req, res, next) => {
    try {
      const posts = await blogPostService.findAll();
      return res.status(200).json(posts);
    } catch (err) {
      return next(err);
    }
  },

  findOnePost: async (req, res, next) => {
    const { id } = req.params;
    try {
      const post = await blogPostService.findOnePost(id);

      if (post.message) return next(post);

      return res.status(200).json(post);
    } catch (err) {
      return next(err);
    }
  },
};

module.exports = blogPostController;
