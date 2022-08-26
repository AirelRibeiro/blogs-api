const blogPostService = require('../services/blogPost');

const validatePost = async (postId) => {
  const post = await blogPostService.findOnePost(postId);
  return post;
};

const validDelete = async (req, res, next) => {
  const validPost = await validatePost(req.params.id);
  if (validPost.message) return next(validPost);

  const { id } = req.userData;
  if (id !== validPost.userId) return next({ message: 'Unauthorized user', code: 401 });

  next();
};

module.exports = validDelete;
