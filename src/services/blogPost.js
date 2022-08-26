const { BlogPost, Category, User, PostCategory } = require('../database/models');

const blogPostService = {
  create: async (newPost, categories) => {
    const { dataValues: 
      { id, title, content, published, updated } } = await BlogPost.create(newPost);
    await Promise.all(categories.map((c) => PostCategory.create({ postId: id, categoryId: c })));
    return { id, title, content, userId: newPost.userId, published, updated };
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

  update: (postInformation, id) => BlogPost.update(postInformation, {
      where: { id },
    }).then(async () => {
      const post = await blogPostService.findOnePost(id);
      return post;
    }),

    delete: (id) => BlogPost.destroy({ where: { id } }).then(() => true),
};

module.exports = blogPostService;
