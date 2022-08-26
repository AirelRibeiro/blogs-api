const { BlogPost, Category, User } = require('../database/models');

const blogPostService = {
  create: async (newPost, categories) => {
  },

  findAll: async () => {
    const posts = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return posts;
  },

  findOnePost: async (postId) => {
    const post = await BlogPost.findByPk(postId, {
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });

    if (!post) return { message: 'Post does not exist', code: 404 };

    return post;
  },
};

module.exports = blogPostService;
