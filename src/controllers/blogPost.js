const blogPostService = require('../services/blogPost');

const blogPostController = {
  create: async (req, res, next) => {
    try {
      const { title, content, userId, categoryIds } = req.newPost;
      const post = await blogPostService.create({ title, content, userId }, categoryIds);
      return res.status(201).json(post); 
    } catch (err) {
      return next(err);
    }
  },

  findAll: async (req, res, next) => {
    try {
      const posts = await blogPostService.findAll();
      return res.status(200).json(posts);
    } catch (err) {
      return next(err);
    }
  },

  findWithQuery: async (req, res, next) => {
    try {
      const { q } = req.query;
      if (!q) {
        const posts = await blogPostService.findAll();
        return res.status(200).json(posts);
      }
      const posts = await blogPostService.findWithQuery(q);
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

  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const post = await blogPostService.update(req.body, id);
      return res.status(200).json(post);
    } catch (err) {
      return next(err);
    }
  },

  delete: async (req, res, next) => {
    try {
      await blogPostService.delete(req.params.id);
      return res.status(204).end();
    } catch (err) {
      return next(err);
    }
  },
};

module.exports = blogPostController;
